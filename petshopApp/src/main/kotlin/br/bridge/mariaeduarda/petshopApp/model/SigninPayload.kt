package br.bridge.mariaeduarda.petshopApp.model

import br.bridge.mariaeduarda.petshopApp.entities.User

data class SigninPayload(val user: User? = null, val token: String? = null)