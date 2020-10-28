package br.bridge.mariaeduarda.petshopApp.repositories

import br.bridge.mariaeduarda.petshopApp.entities.Pet
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.time.LocalDate

@Repository
interface PetRepository : JpaRepository<Pet, Long> {
    fun findByName(name: String): List<Pet>
    
    fun findByOwnerNameLike(name: String): List<Pet>

    fun findByOwnerId(id: Long): List<Pet>

    fun findByBirthDate(birthDate: LocalDate): List<Pet>
}