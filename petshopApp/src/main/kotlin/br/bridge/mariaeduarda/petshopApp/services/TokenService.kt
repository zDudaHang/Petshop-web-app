package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.exception.ExpiredAccessTokenException
import io.jsonwebtoken.ExpiredJwtException
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.stereotype.Service
import java.io.IOException
import java.util.Date
import javax.servlet.ServletException

@Service
class TokenService {
    private val ACCESS_TOKEN_EXPIRATION_MS = 1000

    private val REFRESH_TOKEN_EXPIRATION_MS = ACCESS_TOKEN_EXPIRATION_MS * 5

    private val SECRET: String = "Bebel"

    private fun generateToken(userId: Long?, expirationTimeMs: Int) : String {
        val now = Date()
        val exp = Date(now.time + expirationTimeMs)

        return Jwts.builder()
            .setSubject(userId.toString())
            .setIssuedAt(now)
            .setExpiration(exp)
            .signWith(SignatureAlgorithm.HS256, SECRET).compact()
    }

    fun generateAccessToken(userId: Long?): String = generateToken(userId, ACCESS_TOKEN_EXPIRATION_MS)

    fun generateRefreshToken(userId: Long?): String = generateToken(userId, REFRESH_TOKEN_EXPIRATION_MS)

    @Throws(ExpiredAccessTokenException::class)
    fun isTokenValid(token: String?): Boolean {
        return try {
            Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token)
            true
        } catch (e: ExpiredJwtException) {
            throw ExpiredAccessTokenException()
        } catch (e: Exception) {
            false
        }
    }

    fun getUserIdByToken(token: String?): Long? {
        val body = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).body
        return body.subject.toLong()
    }
}