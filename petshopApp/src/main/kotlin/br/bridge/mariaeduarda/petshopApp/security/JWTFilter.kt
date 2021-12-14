package br.bridge.mariaeduarda.petshopApp.security

import br.bridge.mariaeduarda.petshopApp.entities.User
import br.bridge.mariaeduarda.petshopApp.impl.UserDetailsImpl
import br.bridge.mariaeduarda.petshopApp.services.TokenService
import br.bridge.mariaeduarda.petshopApp.services.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import java.io.IOException
import javax.servlet.FilterChain
import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class JWTFilter(@Autowired private val tokenService: TokenService, @Autowired private val userService: UserService) : OncePerRequestFilter() {

    @Throws(IOException::class, ServletException::class)
    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain) {
        val tokenFromHeader: String? = getTokenFromHeader(request)
        val tokenValid: Boolean = tokenService.isTokenValid(tokenFromHeader)
        if (tokenValid) authenticate(tokenFromHeader)
        filterChain.doFilter(request, response)
    }

    private fun authenticate(tokenFromHeader: String?) {
        val id: Long? = tokenService.getTokenId(tokenFromHeader)
        if (id != null) {
            val user: User = userService.findById(id)
            val usernamePasswordAuthenticationToken = UsernamePasswordAuthenticationToken(UserDetailsImpl(user), null, null)
            SecurityContextHolder.getContext().authentication = usernamePasswordAuthenticationToken
            println(SecurityContextHolder.getContext().authentication.isAuthenticated)
        }
    }

    private fun getTokenFromHeader(request: HttpServletRequest): String? {
        val token = request.getHeader("Authorization")
        return if (token == null || token.isEmpty() || !token.startsWith("Bearer ")) {
            null
        } else token.substring(7, token.length)
    }

}