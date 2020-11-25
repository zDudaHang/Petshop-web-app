import React from "react"
import { Species } from "../../types/Species";
import { ReactComponent as BunnyLogo } from "./SpeciesIcons/001-rabbit.svg"


export enum SpeciesEnum {
    DOG, 
    CAT, 
    RABBIT, 
    PIG, 
    RAT, 
    HAMSTER, 
    HEDGEHOG
}

export interface SpeciesViewProps {
    species: Species
}


export function SpeciesView(props: SpeciesViewProps) {
    switch (props.species.id) {
        // case SpeciesEnum.DOG: return <Emoji symbol="0x1F436" tooltipText="Cachorro"/>;
        // case SpeciesEnum.CAT: return <Emoji symbol="0x1F436"/>;
        // case SpeciesEnum.RABBIT: return <Emoji symbol="0x1F430"/>;
        // case SpeciesEnum.PIG: return <Emoji symbol="0x1F437"/>;
        // case SpeciesEnum.RAT: return <Emoji symbol="0x1F42D"/>;
        // case SpeciesEnum.HAMSTER: return <Emoji symbol="0x1F439"/>;
        // case SpeciesEnum.HEDGEHOG: return <Emoji symbol="0x1F994"/>;
        default: return <BunnyLogo width={50} height={50} fill="#484a4d"/>;
    }
}