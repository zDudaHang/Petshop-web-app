package br.bridge.mariaeduarda.petshopApp.security


import br.bridge.mariaeduarda.petshopApp.exception.ExpiredAccessTokenException
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import java.io.IOException
import javax.servlet.FilterChain
import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class ErrorHandlingFilter : OncePerRequestFilter() {
    
    private val EXPIRED_ACCESS_TOKEN_STATUS_CODE = 452

    @Throws(ServletException::class, IOException::class)
    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain) {
        try {
            filterChain.doFilter(request, response)
        } catch (e: ExpiredAccessTokenException) {
            response.status = EXPIRED_ACCESS_TOKEN_STATUS_CODE
        }
    }


}
