package br.bridge.mariaeduarda.petshopApp.entities

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "Users")
data class User (
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null,

        @Column(unique = true)
        var username: String,

        @Column
        var password: String,

        @Column
        var isAdmin: Boolean = false,

        @Column
        var isVet: Boolean = false,

        @Column
        var name: String
)