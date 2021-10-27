//Add validation to cancel request if component is dismounted

import axios from 'axios';

const axiosCancelToken = () => {
  // cancelToken and source declaration
  const CancelToken = axios.CancelToken;
  let source = CancelToken.source();
  source && source.cancel('Operation canceled due to new request.');
  // save the new request for cancellation
  source = axios.CancelToken.source();
  return source;
};

export default axiosCancelToken;
