import React, { useContext } from 'react'
import { useMutation } from '@apollo/client';
import { DELETE_CUSTOMER } from '../../graphql/mutations';
import { useHistory } from 'react-router-dom';
import { Customer } from '../../types/Customer';
import { formatDate } from "../../util/util";

import { Button, Tooltip, Icon, TableRow, TableCell, Currency } from 'bold-ui'

import AuthContext from '../../AuthContext';
import { MdAttachMoney } from 'react-icons/md';
import { css } from '@emotion/core';

export interface CustomerViewProps {
    customer: Customer;
}

export function CustomerView(props: CustomerViewProps) {

    const {user} = useContext(AuthContext);

    const [deleteCustomer] = useMutation(DELETE_CUSTOMER);

    const history = useHistory();

    const routeUpdate = () => {
        history.push(`/updateCustomer/${props.customer.id}`)
    }

    const routeNewPet = () => {
        history.push(`/createPet/${props.customer.id}`)
    }

    const routePets = () => {
        history.push(`/pets/${props.customer.id}`)
    }

    const routeAddDebt = () => {
        history.push(`/addDebt/${props.customer.id}`)
    }

    return(
            <TableRow key={props.customer.id}>
                <TableCell>
                    {props.customer.id}
                </TableCell>
                <TableCell>
                    {props.customer.name}
                </TableCell>
                <TableCell>
                    {formatDate(props.customer.birthDate)}
                </TableCell>
                {user!.isAdmin && <TableCell>
                    <Currency currency="BRL" value={props.customer.debt}/>
                </TableCell>
                }       
                <TableCell>
                    <Tooltip text='Alterar' placement='bottom'>
                        <Button style={css`margin-right: 0.5rem`} kind='normal' size='small' onClick={routeUpdate} >
                            <Icon icon='penFilled'/>
                        </Button>
                    </Tooltip>
                    <Tooltip text='Deletar' placement='bottom'>
                        <Button style={css`margin-right: 0.5rem`} kind='normal' size='small' onClick={() => deleteCustomer( { variables: {id: props.customer.id} } ) }>
                            <Icon icon='trashFilled'/>
                        </Button>
                    </Tooltip>    
                    <Tooltip text='Ver pets' placement='bottom'>
                        <Button style={css`margin-right: 0.5rem`} kind='normal' size='small'onClick={routePets}>
                            <Icon icon='petFilled'/>
                        </Button>
                    </Tooltip>
                    <Tooltip text='Adicionar um novo pet' placement='bottom'>
                        <Button style={css`margin-right: 0.5rem`} kind='normal' size='small' onClick={routeNewPet}>
                            <Icon icon='plus'/>
                        </Button>
                    </Tooltip>
                    <Tooltip text='Adicionar uma novo valor a pagar' placement='bottom'>
                        <Button kind='normal' size='small' onClick={routeAddDebt}>
                            <MdAttachMoney size={24}/>
                        </Button>
                    </Tooltip>
                </TableCell>
            </TableRow>
    )

}


