export function formatDate(date: string): string {
    let newDate = date.split('-');
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
}