package br.bridge.mariaeduarda.petshopApp.repositories

import br.bridge.mariaeduarda.petshopApp.entities.Pet
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface PetRepository : JpaRepository<Pet, Long> {
    @Query(value = "FROM Pet where name = :name")
    fun findByName(@Param("name") name: String): List<Pet>

    //    @Query(value = "SELECT o.name FROM Person o INNER JOIN Pet p ON (o.id = p.owner)")
    fun findByOwnerName(name: String): List<Pet>

    fun findByOwnerId(id: Long): List<Pet>
}