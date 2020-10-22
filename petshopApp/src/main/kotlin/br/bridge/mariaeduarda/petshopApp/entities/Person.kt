package br.bridge.mariaeduarda.petshopApp.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import java.time.LocalDate
import javax.persistence.*

@Entity
@Table
data class Person(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null,

        @Column
        var name: String,

        @Column(name = "birth_date")
        val birthDate: LocalDate,

        @OneToMany(mappedBy = "owner", cascade = [CascadeType.ALL])
        @JsonIgnore
        val pets: List<Pet>? = null
) {
    override fun toString(): String {
        return "[PERSON #${id}] Name: ${name}, BirthDate: $birthDate"
    }
}