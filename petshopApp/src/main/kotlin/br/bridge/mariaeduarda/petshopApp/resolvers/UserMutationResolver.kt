package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.User
import br.bridge.mariaeduarda.petshopApp.exception.ExpiredAccessTokenException
import br.bridge.mariaeduarda.petshopApp.impl.UserDetailsImpl
import br.bridge.mariaeduarda.petshopApp.model.CreateUserInput
import br.bridge.mariaeduarda.petshopApp.model.LoginInput
import br.bridge.mariaeduarda.petshopApp.model.RefreshTokenInput
import br.bridge.mariaeduarda.petshopApp.model.SigninPayload
import br.bridge.mariaeduarda.petshopApp.security.GraphQLPublic
import br.bridge.mariaeduarda.petshopApp.services.TokenService
import br.bridge.mariaeduarda.petshopApp.services.UserService

import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.stereotype.Component

@Component
class UserMutationResolver(
    @Autowired val service: UserService,
    @Autowired val authenticationManager: AuthenticationManager,
    @Autowired val tokenService: TokenService
) : GraphQLMutationResolver {
    @GraphQLPublic
    fun newUser(input: CreateUserInput): User {
        return service.save(input.username, input.password, input.name)
    }

    @GraphQLPublic
    fun login(input: LoginInput): SigninPayload {
        val usernamePasswordAuthenticationToken = UsernamePasswordAuthenticationToken(input.username, input.password)
        val userDetails: UserDetailsImpl = authenticationManager.authenticate(usernamePasswordAuthenticationToken).principal as UserDetailsImpl
        val userId = userDetails.user.id
        // throw ExpiredAccessTokenException()
        return SigninPayload(
            userDetails.user,
            tokenService.generateAccessToken(userId),
            tokenService.generateRefreshToken(userId)
        )
    }

    @GraphQLPublic
    fun refreshToken(input: RefreshTokenInput): SigninPayload {
        return SigninPayload()
    }
}