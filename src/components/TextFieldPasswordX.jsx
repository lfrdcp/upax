import React from 'react';
import { Grid, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
/**
 * @summary Input to capture password, includes icon
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {string} name Input name
 * @param {Array} error Error provided by {@link https://react-hook-form.com/|React Hook Form} library
 * @param {string} label Input text
 * @param {func} validations Validations (register) provided by {@link https://react-hook-form.com/|React Hook Form} library
 *
 * @example
 * import { useForm } from 'react-hook-form';
 * const { register, errors, handleSubmit } = useForm();
 *
 * <TextFieldPasswordX
 *  label="Contraseña*"
 *  name="password"
 *  error={errors?.password?.message}
 *  validations={register({ ...passwordRule })}
 * />
 */

const TextFieldPasswordX = ({ name, error, label, validations }) => {
  const [data, setData] = React.useState({
    colorIcon: 'inherit',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setData({ ...data, showPassword: !data.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
        <LockOutlinedIcon color={error ? 'error' : data.colorIcon} />
      </Grid>
      <Grid item xs={10} sm={11}>
        <TextField
          onPaste={onPaste}
          onCopy={onCopy}
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
          type={data.showPassword ? 'text' : 'password'}
          variant="outlined"
          margin="normal"
          fullWidth
          label={label}
          name={name}
          inputRef={validations}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {data.showPassword ? (
                    <Visibility color={error ? 'error' : data.colorIcon} />
                  ) : (
                    <VisibilityOff color={error ? 'error' : data.colorIcon} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TextFieldPasswordX;
