package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.User
import br.bridge.mariaeduarda.petshopApp.services.UserService
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class UserQueryResolver(
    @Autowired val service: UserService
    ) : GraphQLQueryResolver
{
    fun users(): List<User>? {
        return service.findAll()
    }

    fun user(id: Int): User? {
        return service.findById(id.toLong())
    }

}