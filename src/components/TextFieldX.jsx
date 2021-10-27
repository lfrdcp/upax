import React from 'react';
import { Grid, TextField } from '@material-ui/core';
/**
 * @summary Keyboard input, with dynamic icon and input type
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {string} name Input name
 * @param {Array} error Error provided by {@link https://react-hook-form.com/|React Hook Form} library
 * @param {('email'| 'number'| 'text')} typeField Input type
 * @param {string} label Input text
 * @param {func} validations Validations (register) provided by {@link https://react-hook-form.com/|React Hook Form} library
 * @param {func} componentIcon Icon provided by {@link https://material-ui.com/es/components/material-icons/|Material UI icons }
 * @param {string} [defaultValue = ''] Default value in input
 *
 * @example
 * import { useForm } from 'react-hook-form';
 * const { register, errors, handleSubmit } = useForm();
 *
 * <TextFieldX
 *  error={errors?.name?.message}
 *  name="name"
 *  typeField="text"
 *  label="Nombre"
 *  componentIcon={AssignmentIndOutlinedIcon}
 *  validations={register({...nameRule,setValueAs: (value) => value,})}
 *  defaultValue={user.name}
 * />
 */
const TextFieldX = ({
  name,
  error,
  typeField,
  label,
  validations,
  componentIcon: ComponentIcon,
  defaultValue = '',
  pasteDisable = false,
  copyDisable = false
}) => {
  const [data, setData] = React.useState({
    colorIcon: 'inherit',
  });

  const onPaste = (e) => {
    e.preventDefault();
    return false;
  };

  const onCopy = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={2} sm={1}>
        <ComponentIcon color={error ? 'error' : data.colorIcon} />
      </Grid>
      <Grid item xs={10} sm={11}>
        <TextField
          {...(pasteDisable ? {onPaste: onPaste} : { })}
          {...(copyDisable ? { onCopy: onCopy } : {})}
          onChange={() => {
            !error && setData({ ...data, colorIcon: 'primary' });
          }}
          onFocus={() => {
            !error && setData({ ...data, colorIcon: 'primary' });
          }}
          onBlur={() => {
            !error && setData({ ...data, colorIcon: 'inherit' });
          }}
          error={error ? true : false}
          helperText={error ? error : ''}
          type={typeField}
          variant="outlined"
          margin="normal"
          fullWidth
          label={label}
          name={name}
          inputRef={validations}
          defaultValue={defaultValue}
        />
      </Grid>
    </Grid>
  );
};

export default TextFieldX;
