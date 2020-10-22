package br.bridge.mariaeduarda.petshopApp.repositories

import br.bridge.mariaeduarda.petshopApp.entities.Person
import br.bridge.mariaeduarda.petshopApp.entities.Pet
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface PersonRepository : JpaRepository<Person, Long> {
    @Query(value = "FROM Person where name = :name")
    fun findByName(@Param("name") name: String): List<Person>

    @Query(value = "FROM Pet where owner.id = :ownerId")
    fun findYourPets(@Param("ownerId") ownerId: Long): List<Pet>
}