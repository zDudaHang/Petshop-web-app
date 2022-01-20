package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.entities.User
import br.bridge.mariaeduarda.petshopApp.impl.UserDetailsImpl
import br.bridge.mariaeduarda.petshopApp.repositories.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService(
    private val repo: UserRepository,
    private val passwordEncoder: PasswordEncoder
) : UserDetailsService {

    fun findAll(): List<User> {
        return repo.findAll()
    }

    @Throws(UsernameNotFoundException::class)
    fun findById(id: Long): User {
        val user: Optional<User> = repo.findById(id)
        if (user.isPresent) return user.get()
        throw UsernameNotFoundException("User not found")
    }

    fun save(username: String, password: String, isAdmin: Boolean, isVet: Boolean, name: String): User {
        val user = User(username = username, password = passwordEncoder.encode(password), isAdmin = isAdmin, isVet = isVet, name = name)
        repo.save(user)
        return user
    }

    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails? {
        val user: Optional<User> = repo.findByUsername(username)
        if (user.isPresent) return UserDetailsImpl(user.get())
        throw UsernameNotFoundException("User not found")
    }
}