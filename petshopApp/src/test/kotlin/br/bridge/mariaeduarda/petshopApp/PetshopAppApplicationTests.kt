package br.bridge.mariaeduarda.petshopApp

import br.bridge.mariaeduarda.petshopApp.entities.Person
import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.services.PersonService
import br.bridge.mariaeduarda.petshopApp.services.PetService
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class PetshopAppApplicationTests(
        @Autowired var personService: PersonService,
        @Autowired var petService: PetService
) {
    @Test
    fun findAllPersons() {
        personService.getAllPersons().iterator().forEach {
            println(it.toString())
            val pets: List<Pet>? = personService.getPets(id = it.id!!)
            println(pets.toString())
        }
    }

    @Test
    fun findPersonById() {
        assert(personService.getPersonById(1)?.name == "Maria")
        assert(personService.getPersonById(2)?.name == "Marcos")
    }

    @Test
    fun findPersonByName() {
        val l: List<Person> = personService.getByName("Marcos")
        l.iterator().forEach {
            println(it.toString())
            assert(it.id == 2L)
        }
    }

    @Test
    fun findAllPets() {
        petService.getAllPets().iterator().forEach { println(it.toString()) }
    }

    @Test
    fun findPetById() {
        assert(petService.getPetById(1)?.name == "Bebel")
        assert(petService.getPetById(2)?.name == "Foguete")
    }

    @Test
    fun findPetByName() {
        val l: List<Pet> = petService.getByName("Bebel")
        l.iterator().forEach {
            println(it.toString())
            assert(it.id == 1L)
        }
    }

}