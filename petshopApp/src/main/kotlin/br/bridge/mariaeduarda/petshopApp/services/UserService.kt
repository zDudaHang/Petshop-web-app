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
        if (user != null) {
            if (user.password == password) {
                return user
            }
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
}