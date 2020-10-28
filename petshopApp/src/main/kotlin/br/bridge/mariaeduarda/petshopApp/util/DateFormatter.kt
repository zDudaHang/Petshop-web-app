package br.bridge.mariaeduarda.petshopApp.util

import java.time.LocalDate

class DateFormatter {
    companion object {
        @JvmStatic
        fun formatDate(date: String): LocalDate {
            val splitted: List<String> = date.split('/')
            val newDateString = "${splitted[2]}-${splitted[1]}-${splitted[0]}"
            return LocalDate.parse(newDateString)
        }
    }
}