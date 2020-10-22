package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.repositories.PetRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class PetService(val repo: PetRepository) {

    fun getAllPets(): MutableIterable<Pet> {
        return repo.findAll()
    }

    fun getPetById(id: Long): Pet? {
        val p: Optional<Pet> = repo.findById(id)
        return p.get()
    }

    fun getByName(name: String): List<Pet> {
        return repo.findByName(name)
    }
}