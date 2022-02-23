package br.bridge.mariaeduarda.petshopApp.model

enum class AuthenticationError(val label: String) {
      ExpiredAccessToken("EXPIRED_ACCESS_TOKEN"),
      ExpiredRefreshToken("EXPIRED_REFRESH_TOKEN");
        
  companion object {
    @JvmStatic
    fun valueOfLabel(label: String): AuthenticationError? {
      return values().find { it.label == label }
    }
  }
}

data class CreateUserInput(
    val name: String,
    val password: String,
    val username: String
) {
  constructor(args: Map<String, Any>) : this(
      args["name"] as String,
      args["password"] as String,
      args["username"] as String
  )
}



data class LoginInput(
    val password: String,
    val username: String
) {
  constructor(args: Map<String, Any>) : this(
      args["password"] as String,
      args["username"] as String
  )
}

data class MutationAddDebtArgs(
    val id: Int,
    val value: String
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Int,
      args["value"] as String
  )
}
data class MutationDeleteCustomerArgs(
    val id: Int
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Int
  )
}
data class MutationDeletePetArgs(
    val id: Int
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Int
  )
}
data class MutationLoginArgs(
    val input: LoginInput
) {
  @Suppress("UNCHECKED_CAST")
  constructor(args: Map<String, Any>) : this(
      LoginInput(args["input"] as Map<String, Any>)
  )
}
data class MutationNewCustomerArgs(
    val birthDate: String,
    val name: String
) {
  constructor(args: Map<String, Any>) : this(
      args["birthDate"] as String,
      args["name"] as String
  )
}
data class MutationNewPetArgs(
    val birthDate: String,
    val name: String,
    val ownerId: Int,
    val speciesId: Int
) {
  constructor(args: Map<String, Any>) : this(
      args["birthDate"] as String,
      args["name"] as String,
      args["ownerId"] as Int,
      args["speciesId"] as Int
  )
}
data class MutationNewUserArgs(
    val input: CreateUserInput
) {
  @Suppress("UNCHECKED_CAST")
  constructor(args: Map<String, Any>) : this(
      CreateUserInput(args["input"] as Map<String, Any>)
  )
}
data class MutationRefreshTokenArgs(
    val input: RefreshTokenInput
) {
  @Suppress("UNCHECKED_CAST")
  constructor(args: Map<String, Any>) : this(
      RefreshTokenInput(args["input"] as Map<String, Any>)
  )
}
data class MutationRemoveDebtArgs(
    val id: Int,
    val value: Float
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Int,
      args["value"] as Float
  )
}
data class MutationUpdateCustomerArgs(
    val id: Int,
    val newName: String
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Int,
      args["newName"] as String
  )
}
data class MutationUpdatePetArgs(
    val id: Int,
    val newName: String
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Int,
      args["newName"] as String
  )
}



data class QueryCustomerArgs(
    val id: Int
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Int
  )
}
data class QueryCustomerPetsArgs(
    val id: Int
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Int
  )
}
data class QueryCustomersByNameLikeArgs(
    val name: String
) {
  constructor(args: Map<String, Any>) : this(
      args["name"] as String
  )
}
data class QueryPetArgs(
    val id: Int
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Int
  )
}
data class QueryPetsByNameLikeArgs(
    val name: String
) {
  constructor(args: Map<String, Any>) : this(
      args["name"] as String
  )
}
data class QueryUserArgs(
    val id: Int
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Int
  )
}

data class RefreshTokenInput(
    val refreshToken: String
) {
  constructor(args: Map<String, Any>) : this(
      args["refreshToken"] as String
  )
}





