package br.bridge.mariaeduarda.petshopApp.services

import br.bridge.mariaeduarda.petshopApp.entities.Appointment
import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.entities.User
import br.bridge.mariaeduarda.petshopApp.repositories.AppointmentRepository
import br.bridge.mariaeduarda.petshopApp.util.Formatter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.LocalDate
import java.util.Date
import java.util.Optional

@Service
class AppointmentService(
    @Autowired val repo: AppointmentRepository,
    @Autowired val petService: PetService,
    @Autowired val userService: UserService
) {
    fun save(userId: Int, petId: Int, date: String, time: String): Appointment? {
        val user : User? = userService.findById(userId.toLong())
        val pet: Pet? = petService.findById(petId.toLong())
        if (user != null && pet != null) {
            val a = Appointment(user = user, pet = pet, date = Formatter.formatDate(date), time = Formatter.formatTime(time))
            repo.save(a)
            return a
        }
        return null
    }

    fun findAll() : List<Appointment>? {
        return repo.findAll()
    }

    fun findById(id: Long): Appointment? {
        val a: Optional<Appointment> = repo.findById(id)
        return a.get()
    }

    fun dayAppointments(userId: Long, date: String): List<Appointment>? {
        println("[DAY APPOINTMENTS - SERVICE] Date: $date")
        return repo.findByUserIdAndDateOrderByTime(userId = userId, date = Formatter.formatDate(date))
    }
}