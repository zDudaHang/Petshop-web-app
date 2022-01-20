package br.bridge.mariaeduarda.petshopApp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
import org.springframework.boot.runApplication
import org.springframework.context.annotation.EnableAspectJAutoProxy

@SpringBootApplication
class PetshopAppApplication

fun main(args: Array<String>) {
	runApplication<PetshopAppApplication>(*args)
}
