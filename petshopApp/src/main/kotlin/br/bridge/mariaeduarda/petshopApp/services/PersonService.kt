package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.entities.Person
import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.repositories.PersonRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class PersonService(val repo: PersonRepository) {
    fun getAllPersons(): List<Person> {
        return repo.findAll()
    }

    fun getPersonById(id: Long): Person? {
        val p: Optional<Person> = repo.findById(id)
        return p.get()
    }

    fun getByName(name: String): List<Person> {
        return repo.findByName(name)
    }

    fun getPets(id: Long): List<Pet>? {
        return repo.findYourPets(id)
    }

}