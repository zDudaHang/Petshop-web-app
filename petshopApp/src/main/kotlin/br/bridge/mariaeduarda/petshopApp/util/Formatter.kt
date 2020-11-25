package br.bridge.mariaeduarda.petshopApp.util

import java.time.LocalDate
import java.time.LocalTime
import java.time.format.DateTimeFormatter

class Formatter
{
    companion object {
        val dateFormatter : DateTimeFormatter = DateTimeFormatter.ofPattern( "dd/MM/yyyy")
        val timeFormatter : DateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm")

        @JvmStatic
        fun formatDate(date: String): LocalDate {
            return LocalDate.from(dateFormatter.parse(date))
        }

        @JvmStatic
        fun formatTime(time: String): LocalTime {
            return LocalTime.from(timeFormatter.parse(time))
        }
    }
}