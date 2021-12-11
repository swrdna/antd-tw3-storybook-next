import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton } from 'antd';

const Button = (props) => {
  return (
    <AntButton {...props} className={`tw-ab-btn-${props.type}`}>{props.children}</AntButton>
  )
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'danger', 'dashed']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
};

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  loading: false,
  disabled: false,
  block: false,
};

export default Button;
