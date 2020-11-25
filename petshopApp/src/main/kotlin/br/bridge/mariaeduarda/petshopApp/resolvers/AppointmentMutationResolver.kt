package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.Appointment
import br.bridge.mariaeduarda.petshopApp.services.AppointmentService
import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class AppointmentMutationResolver(
    @Autowired val service: AppointmentService
) : GraphQLMutationResolver
{
    fun newAppointment(userId: Int, petId: Int, date: String, time: String) : Appointment? {
        return service.save(userId = userId, petId = petId, date = date, time = time)
    }
}