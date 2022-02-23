package br.bridge.mariaeduarda.petshopApp.exception

import graphql.ErrorClassification
import graphql.ErrorType

class ExpiredAccessTokenException: GraphQLException("Token de acesso expirou") {

    override fun getExtensions(): MutableMap<String, Any> {
        return mutableMapOf()
    }

    override fun getErrorType(): ErrorClassification {
        return ErrorType.DataFetchingException
    }
}