package br.bridge.mariaeduarda.petshopApp.repositories

import br.bridge.mariaeduarda.petshopApp.entities.Appointment
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.time.LocalDate

@Repository
interface AppointmentRepository : JpaRepository<Appointment, Long> {
    fun findByUserIdAndDateOrderByTime(userId: Long, date: LocalDate) : List<Appointment>?
}