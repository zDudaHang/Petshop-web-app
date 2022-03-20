package br.bridge.mariaeduarda.petshopApp.exception

import graphql.ErrorClassification
import graphql.ErrorType

class ExpiredRefreshTokenExpcetion : GraphQLException("Token de refresh expirou") {

    private val EXPIRED_REFRESH_TOKEN_STATUS_CODE = 453

    override val message: String?
        get() = super.message

    override fun getExtensions(): Map<String, Any> {
        return mapOf("codeError" to EXPIRED_REFRESH_TOKEN_STATUS_CODE)
    }

    override fun getErrorType(): ErrorClassification {
        return ErrorType.DataFetchingException
    }
}