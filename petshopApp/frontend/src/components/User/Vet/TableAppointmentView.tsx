import { TableCell, TableRow } from 'bold-ui';
import React from 'react'
import { Appointment } from '../../../types/Appointment';

export interface TableAppointmentViewProps {
    appointment: Appointment
}
export function TableAppointmentView(props: TableAppointmentViewProps) {

    return(
        <TableRow>
            <TableCell>
                {props.appointment.id}
            </TableCell>
            <TableCell>
                {props.appointment.time}
            </TableCell>
            <TableCell>
                {props.appointment.pet.name}
            </TableCell>
        </TableRow>
    )
}
