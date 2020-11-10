package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.entities.Customer
import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.repositories.PetRepository
import br.bridge.mariaeduarda.petshopApp.util.DateFormatter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class PetService(
        @Autowired val repo: PetRepository,
        @Autowired val customerService: CustomerService
) {

    fun save(name: String, birthDate: String, ownerId: Int): Pet? {
        val owner: Customer? = customerService.findById(ownerId.toLong())
        if (owner != null) {
            val p = Pet(name = name, birthDate = DateFormatter.formatDate(birthDate), owner = owner)
            repo.save(p)
            return p
        }
        return null
    }

    fun update(id: Int, newName: String): Pet? {
        val p: Pet? = findById(id.toLong())
        if (p != null) {
            p.name = newName
            repo.save(p)
        }
        return p
    }

    fun delete(id: Int): Boolean {
        repo.deleteById(id.toLong())
        return true
    }

    fun findAll(): List<Pet>? {
        return repo.findAll()
    }

    fun findById(id: Long): Pet? {
        val p: Optional<Pet> = repo.findById(id)
        return p.get()
    }

    fun findByNameLike(name: String): List<Pet>? {
        return repo.findByNameLike("%$name%")
    }

    fun findByOwnerId(id: Long): List<Pet>? {
        return repo.findByOwnerId(id)
    }
}