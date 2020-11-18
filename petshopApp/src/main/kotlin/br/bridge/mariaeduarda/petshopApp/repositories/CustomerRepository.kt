package br.bridge.mariaeduarda.petshopApp.repositories

import br.bridge.mariaeduarda.petshopApp.entities.Customer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface CustomerRepository : JpaRepository<Customer, Long> {
    fun findByNameLike(name: String): List<Customer>

    @Query("SELECT SUM(c.debt) FROM Customer c")
    fun sumDebts(): Float
}