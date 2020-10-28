package br.bridge.mariaeduarda.petshopApp.repositories

import br.bridge.mariaeduarda.petshopApp.entities.Person
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import java.time.LocalDate

@Repository
interface PersonRepository : JpaRepository<Person, Long> {
    fun findByName(@Param("name") name: String): List<Person>

    fun findByBirthDate(@Param("birthDate") birthDate: LocalDate): List<Person>

    fun findByNameLike(name: String): List<Person>
}