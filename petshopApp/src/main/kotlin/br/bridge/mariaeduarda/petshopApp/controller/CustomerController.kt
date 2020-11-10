package br.bridge.mariaeduarda.petshopApp.controller

import br.bridge.mariaeduarda.petshopApp.entities.Customer
import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.repositories.CustomerRepository
import br.bridge.mariaeduarda.petshopApp.repositories.PetRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class CustomerController(val personRepository: CustomerRepository, val petRepository: PetRepository) {

    @GetMapping("/customer/all")
    fun persons(): ResponseEntity<List<Customer>> {
        return ResponseEntity.ok(this.personRepository.findAll())
    }

    @GetMapping("/customer/{id}/pets")
    fun persons(@PathVariable(value = "id") id: Long): ResponseEntity<List<Pet>> {
        return ResponseEntity.ok(this.petRepository.findByOwnerId(id))
    }

}