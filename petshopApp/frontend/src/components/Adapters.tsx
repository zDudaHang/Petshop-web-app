import React from "react"
import { MaskedTextField, TextField, FormControl, Radio, DateField, Select } from "bold-ui";

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
    disabled,
    required,
    meta
  }: any) => {
    return (
      <FormControl error={meta.error} htmlFor="birthday-id" label={label} required={required}>
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
          required={required}
        />
      </FormControl>
    );
  };

  export const DatePickerAdapter = ({
    input: { onChange, value },
    label,
    name,
    required,
    meta
  }: any) => {
    return (
      <FormControl error={meta.error} htmlFor="date-id" label={label} required={required}>
        <DateField
          name={name}
          onChange={onChange}
          value={value}
          required={required}
          placeholder="dd/mm/yyyy"
        />
      </FormControl>
    );
  };

  export const SelectAdapter = ({
    input: { onChange, value },
    label,
    name,
    items,
    itemToString,
    disabled,
    required,
    meta
  }: any) => {
    return (
      <FormControl error={meta.error} htmlFor="select-id" label={label} required={required}>
        <Select
          openOnFocus
          name={name}
          onChange={onChange}
          value={value}
          items={items}
          itemToString={itemToString}
          disabled={disabled}
          required={required}
        />
      </FormControl>
    );
  };