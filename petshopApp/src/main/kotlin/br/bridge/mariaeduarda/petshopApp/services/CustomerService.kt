package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.entities.Customer
import br.bridge.mariaeduarda.petshopApp.repositories.CustomerRepository
import br.bridge.mariaeduarda.petshopApp.util.Formatter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class CustomerService(
    @Autowired val repo: CustomerRepository
    ) {

    fun addDebt(id: Int, value: Float): Customer? {
        val c: Customer? = findById(id.toLong())
        if (c != null) {
            c.debt += value
            repo.save(c)
        }
        return c
    }

    fun removeDebt(id: Int, value: Float): Customer? {
        val c: Customer? = findById(id.toLong())
        if (c != null && c.debt - value >= 0) {
            c.debt -= value
            repo.save(c)
        }
        return c
    }

    fun sumDebts(): Float {
        return repo.sumDebts()
    }

    fun save(name: String, birthDate: String): Customer {
        val c = Customer(name = name, birthDate = Formatter.formatDate(birthDate))
        repo.save(c)
        return c
    }

    fun update(id: Int, newName: String): Customer? {
        val c: Customer? = findById(id.toLong())
        if (c != null) {
            c.name = newName
            repo.save(c)
        }
        return c
    }

    fun delete(id: Int): Boolean {
        repo.deleteById(id.toLong())
        return true
    }

    fun findAll(): List<Customer>? {
        return repo.findAll()
    }

    fun findById(id: Long): Customer? {
        val c: Optional<Customer> = repo.findById(id)
        return c.get()
    }

    fun findByNameLike(name: String): List<Customer>? {
        return repo.findByNameLike("%$name%")
    }
}