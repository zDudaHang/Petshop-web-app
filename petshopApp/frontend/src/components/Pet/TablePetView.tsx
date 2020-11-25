import React from 'react'
import { useMutation } from '@apollo/client';
import { DELETE_PET } from '../../graphql/mutations';
import { useHistory } from 'react-router-dom';
import { Pet } from '../../types/Pet';
import { formatDate } from "../../util/util";
import { Button, Icon, TableCell, TableRow, Tooltip} from 'bold-ui';
import { css } from '@emotion/core';

export interface TablePetViewProps {
    pet: Pet;
}

export function TablePetView(props: TablePetViewProps) {

    const history = useHistory();

    const [deletePet] = useMutation(DELETE_PET);

    const routeUpdate = () => {
        history.push(`/updatePet/${props.pet.id}`)
    }

    const routeDelete = () => {
        deletePet( { variables: { id: props.pet.id } } )
        history.push("/searchPet")
    }

    return(
        <TableRow>
                <TableCell>
                    {props.pet.id}
                </TableCell>
                <TableCell>
                    {props.pet.name}
                </TableCell>
                <TableCell>
                    {formatDate(props.pet.birthDate)}
                </TableCell>
                <TableCell>
                  <Tooltip text='Alterar' placement='bottom'>
                        <Button style= {css`margin-right: 0.5rem`} kind='normal' size='small' onClick={routeUpdate}>
                            <Icon icon='penFilled'/>
                        </Button>
                    </Tooltip>
                    <Tooltip text='Deletar' placement='bottom'>
                        <Button kind='normal' size='small' onClick={routeDelete}>
                            <Icon icon='trashFilled'/>
                        </Button>
                    </Tooltip>  
                </TableCell>
            </TableRow>
    )
}
