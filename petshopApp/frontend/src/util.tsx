export function formatDate(date: string): string {
    let newDate = date.split('-');
    console.log(newDate);
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
}