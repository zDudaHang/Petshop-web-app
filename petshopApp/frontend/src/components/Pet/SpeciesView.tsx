import React from "react"
import { Emoji } from "../Emoji";
import { ReactComponent as BunnyLogo } from "./SpeciesIcons/001-rabbit.svg"
export interface SpeciesViewProps {
    specie: String
}


export function SpeciesView(props: SpeciesViewProps) {
    switch (props.specie) {
        case "Dog": return <Emoji symbol="0x1F436" tooltipText="Cachorro"/>;
        case "Cat": return <Emoji symbol="0x1F436"/>;
        case "Rabbit": return <Emoji symbol="0x1F430"/>;
        case "Pig": return <Emoji symbol="0x1F437"/>;
        case "Rat": return <Emoji symbol="0x1F42D"/>;
        case "Hamster": return <Emoji symbol="0x1F439"/>;
        case "Hedgehog": return <Emoji symbol="0x1F994"/>;
        default: return <BunnyLogo width={50} height={50} fill="#484a4d"/>;
    }
}