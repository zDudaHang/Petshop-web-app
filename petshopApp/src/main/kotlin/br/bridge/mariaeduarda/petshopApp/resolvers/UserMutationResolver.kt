package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.User
import br.bridge.mariaeduarda.petshopApp.services.UserService

import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class UserMutationResolver(@Autowired val service: UserService) : GraphQLMutationResolver {
    fun newUser(username: String, password: String, isAdmin: Boolean, isVet: Boolean): User {
        return service.save(username, password, isAdmin, isVet)
    }
}