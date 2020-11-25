import { Pet } from "./Pet";
import { User } from "./User";

export interface Appointment {
    id: number,
    pet: Pet,
    user: User,
    time: string,
}

export interface SimpleAppointment {
    id: number
}

export interface DayAppointmentsResult {
    dayAppointments: Appointment[];
}

export interface CreateAppointmentResult {
    newAppointment: SimpleAppointment;
}