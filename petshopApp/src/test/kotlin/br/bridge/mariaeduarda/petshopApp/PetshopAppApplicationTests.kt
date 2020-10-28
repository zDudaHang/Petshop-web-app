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
    fun findPersonById() {
        val l: List<Person>? = personService.findAll()
        l?.iterator()?.forEach {
            println(it.toString())
        }
        assert(personService.findById(1)?.name == "Maria")
        assert(personService.findById(2)?.name == "Marcos")
    }

    @Test
    fun findPersonByBirthDate() {
        val l: List<Person>? = personService.findByBirthDate(date = "22/01/1999")
        assert(l?.count() == 1)
        l?.iterator()?.forEach {
            assert(it.name == "Maria")
        }
    }

    @Test
    fun findPersonByName() {
        val l: List<Person>? = personService.findByName("Maria Eduarda")
        l?.iterator()?.forEach {
            assert(it.id == 3L)
        }
    }

    @Test
    fun findPersonsByNameLike() {
        val l: List<Person>? = personService.findByNameLike("%Maria%")
        assert(l?.count() == 2)
        assert(l?.get(0)?.id == 1L)
        assert(l?.get(1)?.id == 3L)
    }

    @Test
    fun findPetById() {
        assert(petService.findById(1)?.name == "Bebel")
        assert(petService.findById(2)?.name == "Foguete")
    }

    @Test
    fun findPetByName() {
        val l: List<Pet>? = petService.findByName("Bebel")
        l?.iterator()?.forEach {
            assert(it.id == 1L)
        }
    }

    @Test
    fun findPetByBirthDate() {
        val l: List<Pet>? = petService.findByBirthDate(date = "22/01/2010")
        assert(l?.count() == 1)
        l?.iterator()?.forEach {
            assert(it.name == "Bebel")
        }
    }

    @Test
    fun findByOwnerId() {
        val l: List<Pet>? = petService.findByOwnerId(id = 1L)
        assert(l?.count() == 3)
    }

    @Test
    fun findByOwnerName() {
        val l: List<Pet>? = petService.findByOwnerName("Maria")
        assert(l?.count() == 3)
    }

}