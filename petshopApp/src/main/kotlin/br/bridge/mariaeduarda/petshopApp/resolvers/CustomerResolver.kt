package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.Customer
import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.services.CustomerService
import br.bridge.mariaeduarda.petshopApp.services.PetService
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class CustomerResolver(
        @Autowired val service: CustomerService,
        @Autowired val petService: PetService)
    : GraphQLQueryResolver {

    fun customers(): List<Customer>? {
        return service.findAll()
    }

    fun customer(id: Int): Customer? {
        return service.findById(id.toLong())
    }

    fun customersByNameLike(name: String): List<Customer>? {
        return service.findByNameLike(name)
    }

    fun customerPets(id: Int): List<Pet>? {
        return petService.findByOwnerId(id.toLong())
    }

    fun sumDebts(): Float {
        return service.sumDebts()
    }

}