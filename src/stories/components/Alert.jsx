import React from 'react';
import PropTypes from 'prop-types';
import { Alert as AntAlert } from 'antd';

const Alert = (props) => {
  return (
    <AntAlert {...props} />
  )
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  message: PropTypes.string,
};

Alert.defaultProps = {
  type: 'success',
  message: 'This is alert',
};

export default Alert;
