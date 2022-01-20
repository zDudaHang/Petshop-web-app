package br.bridge.mariaeduarda.petshopApp.security

import org.aspectj.lang.annotation.Aspect
import org.aspectj.lang.annotation.Before
import org.aspectj.lang.annotation.Pointcut
import org.springframework.core.annotation.Order
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component

@Aspect
@Component
@Order(1)
class SecurityGraphQLAspect {

    /**
     * All graphQLResolver methods can be called only by authenticated user
     */
    @Before("(allGraphQLQueryResolverMethods() || allGraphQLMutationResolverMethods()) && isDefinedInApplication() && !isMethodAnnotatedAsGraphQLPublic()")
    fun doSecurityCheck() {
        if (SecurityContextHolder.getContext() == null || SecurityContextHolder.getContext().authentication == null ||
            !SecurityContextHolder.getContext().authentication.isAuthenticated ||
            AnonymousAuthenticationToken::class.java.isAssignableFrom(SecurityContextHolder.getContext().authentication.javaClass)
        ) {
            throw Exception("Acesso não permitido")
        }
    }

    /**
     * Matches all beans that implement [graphql.kickstart.tools.GraphQLQueryResolver]
     */
    @Pointcut("target(graphql.kickstart.tools.GraphQLQueryResolver)")
    private fun allGraphQLQueryResolverMethods() {}

    /**
     * Matches all beans that implement [graphql.kickstart.tools.GraphQLMutationResolver]
     */
    @Pointcut("target(graphql.kickstart.tools.GraphQLMutationResolver)")
    private fun allGraphQLMutationResolverMethods() {}

    /**
     * Matches all beans in br.bridge.mariaeduarda.petshopApp package
     */
    @Pointcut("within(br.bridge.mariaeduarda.petshopApp..*)")
    private fun isDefinedInApplication() {}

    /**
     * Any method annotated with @GraphQLPublic
     */
    @Pointcut("@annotation(br.bridge.mariaeduarda.petshopApp.security.GraphQLPublic)")
    private fun isMethodAnnotatedAsGraphQLPublic() {}
}