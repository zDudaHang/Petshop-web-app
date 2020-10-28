package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.Person
import br.bridge.mariaeduarda.petshopApp.services.PersonService
import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class PersonMutationResolver(@Autowired val service: PersonService) : GraphQLMutationResolver {
    fun newPerson(name: String, birthDate: String): Person {
        return service.save(name, birthDate)
    }

    fun updatePerson(id: Int, newName: String): Person? {
        return service.update(id, newName)
    }

    fun deletePerson(id: Int): Boolean {
        return service.delete(id)
    }
}