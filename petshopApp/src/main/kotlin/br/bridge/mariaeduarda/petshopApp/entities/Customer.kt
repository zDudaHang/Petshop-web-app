package br.bridge.mariaeduarda.petshopApp.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import java.time.LocalDate
import javax.persistence.*

@Entity
data class Customer(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null,

        @Column
        var name: String,

        @Column(name = "birth_date")
        val birthDate: LocalDate,

        @OneToMany(mappedBy = "owner")
        @JsonIgnore
        var pets: List<Pet>? = null,

        @Column
        var debt: Float = 0F
) {
    override fun toString(): String {
        return "[CUSTOMER #${id}] " +
                "Name: ${name}, " +
                "BirthDate: $birthDate" +
                "Debt: R$$debt"
    }
}