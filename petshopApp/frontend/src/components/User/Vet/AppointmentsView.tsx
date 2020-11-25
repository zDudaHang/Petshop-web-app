import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks";
import { Button, Heading, HFlow, Icon, Table, TableBody, TableHead, TableHeader, TableRow, VFlow } from "bold-ui";
import { useParams } from "react-router-dom";
import { DAY_APPOINTMENT, USER } from "../../../graphql/queries";
import { UserResult } from "../../../types/User";
import { css } from "@emotion/core";
import { ErrorView } from "../../Infos/ErrorView";
import Moment from "react-moment";
import { DayAppointmentsResult } from "../../../types/Appointment";
import { TableAppointmentView } from "./TableAppointmentView";
import moment from "moment";

export function AppointmentsView() {

    const { userId } = useParams<{userId: string}>();

    const [actualDate, setActualDate] = useState(new Date())

    const { loading:loadingUser, data:user } = useQuery<UserResult>(USER, {
        variables: { id: userId }
    });
    
    const { loading:loadingAppointments, data:appointments } = useQuery<DayAppointmentsResult>(DAY_APPOINTMENT, {
        variables: { userId: userId, date: (moment(actualDate).format("DD/MM/YYYY")) }
    });

    const handleClickLeftAngle = () => {
        const newDate = moment(actualDate).subtract(1,'days').toDate()
        setActualDate(newDate)
    }

    const handleClickRightAngle = () => {
        const newDate = moment(actualDate).add(1,'days').toDate()
        setActualDate(newDate)
    }

    if (loadingUser || loadingAppointments) {
        return (
            <VFlow>
                <Heading style={css`text-align: center`} color="normal" level={1}>
                    Carregando...
                </Heading>
            </VFlow>
        );
    }

    if (user && appointments) {
        return (
            <VFlow style={css`margin-top: 1rem`}>
                <Heading style={css`text-align: center`} color="normal" level={1}>
                    Consultas
                </Heading>
                <HFlow alignItems="center" justifyContent="center">
                    <Button kind="normal" size="small" skin="ghost" onClick={handleClickLeftAngle}>
                        <Icon icon="angleLeft"/>
                    </Button>
                    <Heading style={css`text-align: center`} color="normal" level={1}>
                        <Moment format="DD/MM/YYYY" date={actualDate}/>
                    </Heading>
                    <Button kind="normal" size="small" skin="ghost" onClick={handleClickRightAngle}>
                        <Icon icon="angleRight"/>
                    </Button>
                </HFlow>
                <HFlow alignItems="center" justifyContent="center">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader>ID</TableHeader>
                                <TableHeader>Horário</TableHeader>
                                <TableHeader>Pet</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments.dayAppointments.map( (a) => {
                                return (
                                    <TableAppointmentView key={a.id} appointment={a}/>
                                )
                            })}
                        </TableBody>
                    </Table>
                </HFlow>
            </VFlow>
        )

    } else {
        return (
            <ErrorView/>
        );
    }
}