import React from 'react';
/**
 * ## Custom Hook to handle snackbar
 * Handle the state of the snackbar, also returns a function that the component needs
 *
 * @module useSnackbar
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @example const { handleClose, setSnackbar, snackbar } = useSnackbar();
 */
const useSnackbar = () => {
  const handleClose = (event, reason) => {
    reason !== 'clickaway' && setSnackbar({ ...snackbar, openX: false });
  };

  const [snackbar, setSnackbar] = React.useState({
    openX: false,
    messageX: '',
    typeX: '',
  });

  return { handleClose, snackbar, setSnackbar };
};

export default useSnackbar;
