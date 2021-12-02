package br.bridge.mariaeduarda.petshopApp.entities

import java.time.LocalDate
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.OneToMany

@Entity
class Pet(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @Column
    var name: String,

    @Column(name = "birth_date")
    val birthDate: LocalDate,

    @ManyToOne
    @JoinColumn(name = "owner")
    var owner: Customer,

    @OneToMany(mappedBy = "pet")
    val appointments: Set<Appointment>? = emptySet(),

    @ManyToOne
    @JoinColumn(name = "species")
    val species: Species

) {
    override fun toString(): String {
        return "[PET #${id}] " +
            "Name: ${name}, " +
            "BirthDate: ${birthDate}, " +
            "Owner: ${owner.toString()}"
    }
}