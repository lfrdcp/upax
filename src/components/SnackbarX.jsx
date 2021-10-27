import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

/**
 * @summary Dynamic snackbar, provide a message after a request
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {Object} data The data general contain the message, type and boolean snackbar
 * @param {string} data.messageX Snackbar message
 * @param {('success'| 'warning'| 'info'| 'error')} data.typeX Snackbar type
 * @param {bool} data.openX The const true, to show the snackbar
 * @param {func} handleClose Funct to handle the const openX
 *
 * @example
 * <SnackbarX
 *  data={snackbar}
 *  handleClose={handleClose}
 * />
 */

const SnackbarX = ({ data, handleClose }) => {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <Snackbar
      open={data.openX}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert onClose={handleClose} severity={data.typeX}>
        {data.messageX}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarX;

SnackbarX.propTypes = {
  data: PropTypes.shape({
    messageX: PropTypes.string.isRequired,
    typeX: PropTypes.string.isRequired,
    openX: PropTypes.bool.isRequired,
  }),
  handleClose: PropTypes.func.isRequired,
};
