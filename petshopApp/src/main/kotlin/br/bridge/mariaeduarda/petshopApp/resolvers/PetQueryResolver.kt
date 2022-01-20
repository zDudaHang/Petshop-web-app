package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.services.PetService
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class PetQueryResolver(
    @Autowired val service: PetService
    ) : GraphQLQueryResolver

{
    fun pets(): List<Pet>? {
        return service.findAll()
    }

    fun pet(id: Int): Pet? {
        return service.findById(id.toLong())
    }

    fun petsByNameLike(name: String): List<Pet>? {
        return service.findByNameLike(name)
    }

}