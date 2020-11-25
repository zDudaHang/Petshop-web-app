import React, { useEffect, useState } from "react"
import { Field } from "react-final-form"

function DisplayError({ delay, active, dirty, error, touched, children} : any) {
    const [show, setShow] = useState(false)
    useEffect(
        () => {
            let timeout: NodeJS.Timeout
            console.log(`[DISPLAY ERROR] error: ${error} children:`)
            console.log(children)
            console.log(`active: ${active} dirty: ${dirty}`)
            if (active && error && dirty) {
                console.log('[DISPLAY ERROR] setting timeout')
                timeout = setTimeout(() => setShow(true), delay)
            }
            return () => {
                console.log('[DISPLAY ERROR] clearing timeout')
                clearTimeout(timeout)
            }
        },
    [delay, error, active, dirty, children])

    return error && ((touched && !active) || (touched && !show && active) || show)
        ? children(error)
        : null
}

export function ErrorWithDelay({name, children, delay} : any) {
    // console.log(`[ERROR WITH DELAY] name: ${name} children:`)
    // console.log(children)
    return(
        <Field
            name={name}
            subscription={{active: true, error: true, dirty: true, touched: true}}
            /*
                An object of the parts of FieldState to subscribe to. 
                If a subscription is provided, the <Field/> will only rerender when those parts of field state change.
                If no subscription is provided, it will default to subscribing to all field state changes. 
                i.e. <Field/> will rerender whenever any part of the field state changes.
            */
        >
            {({meta: {active, dirty, error, touched}}) => (
                <DisplayError
                    delay={delay}
                    active={active}
                    dirty={dirty}
                    error={error}
                    touched={touched}
                    children={children}
                />
            )}
        </Field>
    )
}