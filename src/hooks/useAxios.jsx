import React from 'react';
import API from '../data/api';
import useAxiosError from '../hooks/useAxiosError';
import useSnackbar from '../hooks/useSnackbar';
import useIsMounted from './useIsMounted';
import axiosCancelToken from '../data/axiosCancelToken';
/**
 * ## Custom Hook to request
 * Request to API REST, manage a snack bar and loading bar
 * Depend on {@link https://github.com/axios/axios/|Axios}
 *
 * @module useAxios
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @param {string} url api url
 *
 * @example const { apiAxios, snackbar, handleClose, loading } = useAxios('api/login');
 */
const useAxios = (url) => {
  const { handleClose, setSnackbar, snackbar } = useSnackbar();
  const { checkError } = useAxiosError({ setSnackbar });
  const [loading, setloading] = React.useState(false);
  const source = axiosCancelToken();
  const isMounted = useIsMounted();
  const isMountedLoad = () => isMounted.current && setloading(false);

  /**
   * @summary Make a request, setter progress bar, validation in case of error and use dynamic success method
   * @memberof module:useAxios
   *
   * @param {('get'|'post'|'put'|'delete')} method Request methods
   * @param {Array} data Parameters to send
   * @param {function} success Function if the answer is successful
   * @param {Array} errors  Message array if response failed
   *
   * @example apiAxios('post', data, success, errorLogin);
   */
  const apiAxios = (method, data, success, errors, rest) => {
    isMounted.current && setloading(true);
    API(url, {
      method: method,
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
      cancelToken: source.token,
    })
      .then((r) => {
        success(r);
        isMountedLoad();
      })
      .catch((e) => {
        checkError(e, errors);
        isMountedLoad();
      });
  };

  return { apiAxios, setSnackbar, snackbar, handleClose, loading };
};

export default useAxios;
