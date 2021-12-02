package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.User
import br.bridge.mariaeduarda.petshopApp.impl.UserDetailsImpl
import br.bridge.mariaeduarda.petshopApp.model.LoginInput
import br.bridge.mariaeduarda.petshopApp.model.SigninPayload
import br.bridge.mariaeduarda.petshopApp.security.GraphQLPublic
import br.bridge.mariaeduarda.petshopApp.services.TokenService
import br.bridge.mariaeduarda.petshopApp.services.UserService

import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.stereotype.Component

@Component
class UserMutationResolver(
    @Autowired val service: UserService,
    @Autowired val authenticationManager: AuthenticationManager,
    @Autowired val tokenService: TokenService
    ) : GraphQLMutationResolver
{
    @GraphQLPublic
    fun newUser(username: String, password: String, isAdmin: Boolean, isVet: Boolean, name: String): User {
        return service.save(username, password, isAdmin, isVet, name)
    }

    @GraphQLPublic
    fun login(input: LoginInput): SigninPayload {
        val usernamePasswordAuthenticationToken = UsernamePasswordAuthenticationToken(input.username, input.password)
        val authentication: Authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken)
        val token: String = tokenService.generateToken(authentication)
        val userDetails : UserDetailsImpl = authentication.principal as UserDetailsImpl
        return SigninPayload(userDetails.user,token)
    }
}