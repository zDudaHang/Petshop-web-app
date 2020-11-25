package br.bridge.mariaeduarda.petshopApp.entities

import java.time.LocalDate
import java.time.LocalTime
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.ForeignKey
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.MapsId
import javax.persistence.OneToOne
import javax.persistence.PrimaryKeyJoinColumn
import javax.persistence.Table

@Entity
@Table
class Appointment (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id : Long? = null,

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    val user: User,

    @ManyToOne
    @JoinColumn(name = "pet_id", referencedColumnName = "id")
    val pet: Pet,

    @Column
    val date: LocalDate,

    @Column
    val time: LocalTime

) {
    override fun toString(): String {
        return "[APPOINTMENT #${id}] " +
            "Pet #${pet.id}: ${pet.name}, " +
            "User #${user.id}: ${user.username}, " +
            "Date: $date at $time"
    }
}