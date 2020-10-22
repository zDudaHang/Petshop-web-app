package br.bridge.mariaeduarda.petshopApp

import br.bridge.mariaeduarda.petshopApp.entities.Person
import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.repositories.PersonRepository
import br.bridge.mariaeduarda.petshopApp.repositories.PetRepository
import org.springframework.boot.CommandLineRunner
import java.time.LocalDate
import java.time.Month

//@Component
class DataBaseLoader(
        private val personRepo: PersonRepository,
        private val petRepo: PetRepository
) : CommandLineRunner {
    override fun run(vararg args: String?) {
        savePersons()
    }

    fun savePersons() {
        val maria = Person(name = "Maria", birthDate = LocalDate.of(1999, Month.JANUARY, 22))
        val marcos = Person(name = "Marcos", birthDate = LocalDate.of(2010, Month.JANUARY, 30))
        val ana = Person(name = "Ana", birthDate = LocalDate.of(2000, Month.JANUARY, 30))
        val joao = Person(name = "João", birthDate = LocalDate.of(2005, Month.JANUARY, 30))
        personRepo.save(maria)
        personRepo.save(marcos)
        personRepo.save(ana)
        personRepo.save(joao)
        petRepo.save(Pet(name = "Bebel", birthDate = LocalDate.of(2010, Month.JANUARY, 22), owner = maria))
        petRepo.save(Pet(name = "Foguete", birthDate = LocalDate.of(2015, Month.FEBRUARY, 22), owner = marcos))
    }
}