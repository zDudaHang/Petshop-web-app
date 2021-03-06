import React from 'react'
import { Currency, TableCell, TableRow, Tooltip} from 'bold-ui';
import { UserWithoutPassword } from '../../types/User';
import { FaUser, FaUserMd, FaUserTie } from 'react-icons/fa';

export interface UserViewProps {
    user: UserWithoutPassword;
}

export function TableUserView(props: UserViewProps) {

    return(
        <TableRow>
                <TableCell>
                    {props.user.id}
                </TableCell>
                <TableCell>
                    {props.user.username}
                </TableCell>
                <TableCell>
                    {props.user.name}
                </TableCell>
                <TableCell>
                    <Currency currency="BRL" value={props.user.salary}/>
                </TableCell>
                <TableCell>
                    {props.user.isAdmin && 
                        <Tooltip text="Esse usuário é um administrador" placement='right'>
                            <FaUserTie size={24}/>
                        </Tooltip>
                    }
                    {props.user.isVet && 
                        <Tooltip text="Esse usuário é um veterinário" placement='right'>
                            <FaUserMd size={24}/>
                        </Tooltip>
                    }
                    {!props.user.isAdmin && !props.user.isVet && 
                        <Tooltip text="Esse usuário é um colaborador" placement='right'>
                            <FaUser size={24}/>
                        </Tooltip>
                    }
                </TableCell>
            </TableRow>
    )
}
