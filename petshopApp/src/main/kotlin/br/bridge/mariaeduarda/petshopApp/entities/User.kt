package br.bridge.mariaeduarda.petshopApp.entities

import javax.persistence.*

@Entity
@Table(name = "USERS")
data class User(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null,

        @Column(unique = true)
        var username: String,

        @Column
        var password: String,

        @Column
        var isAdmin: Boolean,

        @Column
        var isVet: Boolean

)