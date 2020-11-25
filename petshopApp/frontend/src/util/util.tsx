

export function formatDate(date: string): string {
    let newDate = date.split('-');
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
}

export function isValidHour(time: string): boolean {
    if (time) {
        const timeSplitted = time.split(':')
        const hours = parseInt(timeSplitted[0])
        const minutes = parseInt(timeSplitted[1])
        return hours <= 23 && minutes <= 59
    }
    return true
}