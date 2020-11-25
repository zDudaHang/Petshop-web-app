import { Pet } from "./Pet";

export interface Appointment {
    id: number,
    pet: Pet,
    time: string,
}

export interface DayAppointmentsResult {
    dayAppointments: Appointment[];
}