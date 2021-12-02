package br.bridge.mariaeduarda.petshopApp.entities

import java.time.LocalDate
import java.time.LocalDateTime
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
        var isAdmin: Boolean,

        @Column
        var isVet: Boolean,

        @Column
        var name: String
)