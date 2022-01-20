package br.bridge.mariaeduarda.petshopApp.security

/**
 * This annotation will disable security check for
 * the GraphQL resolver method where it is marked.
 */
@Retention(AnnotationRetention.RUNTIME)
@Target(AnnotationTarget.FUNCTION)
annotation class GraphQLPublic
