import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';

/**
 * @summary Dynamic submit button
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {string} text Button message
 * @param {('default'| 'inherit'| 'primary'| 'secondary')} [color = 'secondary'] Button color
 *
 * @example
 * <ButtonSubmitX text="Update" />
 * <ButtonSubmitX text="Delete" color="primary" />
 */
const ButtonSubmitX = ({ text }) => {
  const classes = useStyles();
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      className={classes.submit}
    >
      {text}
    </Button>
  );
};

export default ButtonSubmitX;

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  },
}));
