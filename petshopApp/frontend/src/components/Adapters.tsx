import React from "react"
import { MaskedTextField, TextField, FormControl, Radio, DateField, Select, TimeField } from "bold-ui";
import { ErrorWithDelay } from "./Infos/ErrorWithDelay";

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

  export const TimeFieldAdapter = ({
    input: { onChange, value },
    label,
    name,
    required,
    error,
  }: any) => {
    // console.log(`[TIME_FIELD_ADAPTER] error: ${error}`)
    return (
      <FormControl htmlFor="time-id" label={label} required={required} error={error}>
        <TimeField
          name={name}
          onChange={onChange}
          value={value}
          required={required}
          keepCharPositions
          guide
          mask={[/\d/,/\d/,':',/\d/,/\d/]}
          placeholderChar='_'
          pipe
          showMask={false}
        />
        <ErrorWithDelay name="time" delay={5000}>
          {(error: any) => <span>{error}</span>}
        </ErrorWithDelay>
      </FormControl>
    );
  };