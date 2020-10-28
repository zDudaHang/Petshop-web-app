import React from 'react'

export interface PetViewProps {
    id: number,
    name: string,
    birthDate: string
}

export function PetView(props: PetViewProps) {
        console.log(`
        PetView from Pet#${props.id}\n
        Name: ${props.name}\n
        BirthDate: ${props.birthDate}
        `)
        
        return(
            <div>
                <h3> Pet #{props.id} </h3>
                <div> Name: {props.name} </div>
                <div> Birth Date: {props.birthDate} </div>
                <button onClick={() => console.log(`Alterar o pet c/ ID: ${props.id}`)}>Alterar</button>
                <button onClick={() => console.log(`Deletar o pet c/ ID: ${props.id}`)}>Deletar</button>
            </div>
        )
}
