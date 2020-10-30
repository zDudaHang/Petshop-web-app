package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.entities.Person
import br.bridge.mariaeduarda.petshopApp.repositories.PersonRepository
import br.bridge.mariaeduarda.petshopApp.util.DateFormatter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class PersonService(@Autowired val repo: PersonRepository) {

    fun save(name: String, birthDate: String): Person {
        val p = Person(name = name, birthDate = DateFormatter.formatDate(birthDate))
        repo.save(p)
        return p
    }

    fun update(id: Int, newName: String): Person? {
        val p: Person? = findById(id.toLong())
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

    fun findAll(): List<Person>? {
        return repo.findAll()
    }

    fun findById(id: Long): Person? {
        val p: Optional<Person> = repo.findById(id)
        return p.get()
    }

    fun findByNameLike(name: String): List<Person>? {
        return repo.findByNameLike("%$name%")
    }
}