package br.bridge.mariaeduarda.petshopApp.resolvers

import br.bridge.mariaeduarda.petshopApp.entities.Species
import br.bridge.mariaeduarda.petshopApp.repositories.SpeciesRepository
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class SpeciesResolver (
    @Autowired val repo: SpeciesRepository
    ) : GraphQLQueryResolver
{
    fun allSpecies(): List<Species>? {
        return repo.findAll()
    }
}