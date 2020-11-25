package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.Appointment
import br.bridge.mariaeduarda.petshopApp.services.AppointmentService
import br.bridge.mariaeduarda.petshopApp.util.Formatter
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class AppointmentResolver(
    @Autowired val service : AppointmentService
) : GraphQLQueryResolver
{
    fun appointments(): List<Appointment>? {
        return service.findAll()
    }

    fun appointment(id: Int): Appointment? {
        return service.findById(id.toLong())
    }

    fun dayAppointments(userId: Int, date: String) : List<Appointment>? {
        println("[DAY APPOINTMENTS - RESOLVER] Date: $date")
        return service.dayAppointments(userId = userId.toLong(), date = date)
    }
}