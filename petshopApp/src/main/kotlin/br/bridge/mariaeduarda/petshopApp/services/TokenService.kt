package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.impl.UserDetailsImpl
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.security.core.Authentication
import org.springframework.stereotype.Service
import java.time.Duration
import java.time.Instant
import java.util.Date

@Service
class TokenService {
    private val expiration: Instant = Instant.now().plus(Duration.ofHours(2))

    private val secret: String = "Bebel"

    fun generateToken(authentication: Authentication): String {
        val usuario: UserDetailsImpl = authentication.principal as UserDetailsImpl
        val now = Date()
        val exp = Date(now.time + expiration.toEpochMilli())

        return Jwts.builder()
            .setSubject(usuario.username)
            .setIssuedAt(Date())
            .setExpiration(exp)
            .signWith(SignatureAlgorithm.HS256, secret).compact()
    }

    fun isTokenValid(token: String?): Boolean {
        return try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token)
            true
        } catch (e: Exception) {
            false
        }
    }

    fun getTokenId(token: String?): Long? {
        val body = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).body
        return body.subject.toLong()
    }
}