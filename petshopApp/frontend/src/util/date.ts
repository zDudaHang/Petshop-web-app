export function formatDate(date: string): string {
  let newDate = date.split("-")
  return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
}

export function generateValidHours(): string[] {
  const hours: string[] = []
  for (var i = 7; i < 24; i++) {
    if (i < 10) {
      hours.push(`0${i}:00`)
      hours.push(`0${i}:30`)
    } else {
      hours.push(`${i}:00`)
      hours.push(`${i}:30`)
    }
  }
  return hours
}
