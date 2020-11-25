package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.entities.User
import br.bridge.mariaeduarda.petshopApp.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(@Autowired val repo: UserRepository) {

    fun auth(username: String, password: String): User? {
        val user: User? = repo.findByUsername(username)
        if (user != null && user.password == password) {
            return user
        }

        return null
    }

    fun findAll(): List<User> {
        return repo.findAll()
    }

    fun findById(id: Long): User? {
        val u: Optional<User> = repo.findById(id)
        return u.get()
    }

    fun save(username: String, password: String, isAdmin: Boolean, isVet: Boolean, name: String, salary: Int): User {
        val u = User(username = username, password = password, isAdmin = isAdmin, isVet = isVet, name = name, salary = salary)
        repo.save(u)
        return u
    }

    fun findByIsVetTrue() : List<User>? {
        return repo.findByIsVetTrue()
    }
}