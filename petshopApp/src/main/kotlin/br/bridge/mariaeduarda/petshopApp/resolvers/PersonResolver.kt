package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.Person
import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.services.PersonService
import br.bridge.mariaeduarda.petshopApp.services.PetService
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class PersonResolver(@Autowired val service: PersonService, @Autowired val petService: PetService) : GraphQLQueryResolver {

    fun persons(): List<Person>? {
        return service.findAll()
    }

    fun person(id: Int): Person? {
        return service.findById(id.toLong())
    }

    fun personsByNameLike(name: String): List<Person>? {
        return service.findByNameLike(name)
    }

    fun personPets(id: Int): List<Pet>? {
        return petService.findByOwnerId(id.toLong())
    }

}