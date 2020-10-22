package br.bridge.mariaeduarda.petshopApp.controller

import br.bridge.mariaeduarda.petshopApp.entities.Person
import br.bridge.mariaeduarda.petshopApp.entities.Pet
import br.bridge.mariaeduarda.petshopApp.repositories.PersonRepository
import br.bridge.mariaeduarda.petshopApp.repositories.PetRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class PersonController(val personRepository: PersonRepository, val petRepository: PetRepository) {

    @GetMapping("/person/all")
    fun persons(): ResponseEntity<List<Person>> {
        return ResponseEntity.ok(this.personRepository.findAll())
    }

    @GetMapping("/person/{id}/pets")
    fun persons(@PathVariable(value = "id") id: Long): ResponseEntity<List<Pet>> {
        return ResponseEntity.ok(this.petRepository.findByOwnerId(id))
    }

}