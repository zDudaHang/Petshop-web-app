package br.bridge.mariaeduarda.petshopApp.entities

import java.time.LocalDate
import javax.persistence.*

@Entity
@Table
class Pet(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null,

        @Column
        var name: String,

        @Column(name = "birth_date")
        val birthDate: LocalDate,

        @ManyToOne
        @JoinColumn(name = "owner")
        var owner: Person
) {
    override fun toString(): String {
        return "[PET #${id}] Name: ${name}, BirthDate: ${birthDate}, Owner: ${owner.toString()}"
    }
}