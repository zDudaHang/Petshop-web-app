package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.Customer
import br.bridge.mariaeduarda.petshopApp.services.CustomerService
import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class CustomerMutationResolver(@Autowired val service: CustomerService) : GraphQLMutationResolver {
    fun newCustomer(name: String, birthDate: String): Customer {
        return service.save(name, birthDate)
    }

    fun updateCustomer(id: Int, newName: String): Customer? {
        return service.update(id, newName)
    }

    fun deleteCustomer(id: Int): Boolean {
        return service.delete(id)
    }

    fun addDebt(id: Int, value: String): Customer? {
        return service.addDebt(id, value.toFloat())
    }

    fun removeDebt(id: Int, value: Float): Customer? {
        return service.removeDebt(id, value)
    }
}