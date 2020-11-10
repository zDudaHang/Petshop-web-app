import React from "react";

export interface InputProps {
    label: string,
    type: string,
    value: string,
    onChange: (e: React.ChangeEvent) => {}
}

export interface CreateViewProps {
    title: string,
    onSubmit: (e: React.FormEvent) => {},
    inputs: InputProps[]
}

export function CreateView(props: CreateViewProps) {
    const size = props.title.length
    console.log(`Substring : ${props.title.substring(1,size-1)}`)
    return (
        <>
            <h2>{props.title.substring(1,size-1)}</h2>
            <form className="form" onSubmit={(e) => props.onSubmit(e)}>
                {props.inputs.map( (input) => (
                    <>
                        <label>{input.label}</label>
                        {/* <input type={input.type} value={(input.value.split('"')[1])} onChange={(e: React.ChangeEvent) => input.onChange(e.target.value)}/> */}
                    </>
                ))}
            </form>
        </>
    );
}