import { Tooltip } from "bold-ui"
import React from "react"

export function Emoji({className, label, symbol, tooltipText}: any) {
    return (
        <Tooltip text={tooltipText} placement="top">
            <span className={className} role="img" aria-label={label}>
                {String.fromCodePoint(symbol)}
            </span>
         </Tooltip>
    )
}