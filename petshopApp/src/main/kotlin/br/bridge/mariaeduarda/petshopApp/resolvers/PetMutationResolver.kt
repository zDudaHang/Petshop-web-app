package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.services.PetService
import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class PetMutationResolver(
    @Autowired val service: PetService
    ) : GraphQLMutationResolver
{
    fun newPet(name: String, birthDate: String, ownerId: Int, speciesId: Int): Pet? {
        return service.save(name, birthDate, ownerId, speciesId)
    }

    fun updatePet(id: Int, newName: String): Pet? {
        return service.update(id, newName)
    }

    fun deletePet(id: Int): Boolean {
        return service.delete(id)
    }
}