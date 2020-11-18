import React from "react"
import { MaskedTextField, TextField, FormControl, Radio } from "bold-ui";

export const TextFieldAdapter = ({input, meta, ...rest}: any) => {
    return <TextField {...input} error={meta.error} {...rest} />
}

export const RadioFieldAdapter = ({ input, meta, ...rest }: any) => {
  return <Radio {...input} {...rest} />
}

export const MaskedTextFieldAdapter = ({
    input: { onChange, value },
    label,
    name,
    disabled
  }: any) => {
    return (
      <FormControl error="" htmlFor="birthday-id" label={label} required>
        <MaskedTextField
          id="birthday-id"
          disabled={disabled}
          guide
          mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
          name={name}
          placeholder="dd/mm/aaaa"
          value={value}
          onChange={onChange}
          placeholderChar='_'
          pipe
          showMask
          keepCharPositions
        />
      </FormControl>
    );
  };