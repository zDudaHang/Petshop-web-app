package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.entities.User
import br.bridge.mariaeduarda.petshopApp.impl.UserDetailsImpl
import br.bridge.mariaeduarda.petshopApp.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(@Autowired val repo: UserRepository, @Autowired val passwordEncoder: PasswordEncoder) : UserDetailsService {

    fun findAll(): List<User> {
        return repo.findAll()
    }

    @Throws(UsernameNotFoundException::class)
    fun findById(id: Long): User {
        val u: Optional<User> = repo.findById(id)
        if (u.isPresent) return u.get()
        throw UsernameNotFoundException("User not found")
    }

    fun save(username: String, password: String, name: String): User {
        val u = User(username = username, password = passwordEncoder.encode(password), name = name)
        repo.save(u)
        return u
    }

    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails? {
        val u: Optional<User> = repo.findByUsername(username)
        if (u.isPresent) return UserDetailsImpl(u.get())
        throw UsernameNotFoundException("User not found")

    }
}