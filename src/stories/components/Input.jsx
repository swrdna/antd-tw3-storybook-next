import React from 'react';
import PropTypes from 'prop-types';
import { Input as AntInput } from 'antd';

const Input = (props) => {
  return (
    <AntInput {...props} className={`rounded-lg focus:border-indigo-600 focus:shadow-none hover:border-indigo-600 ${props.className}`} />
  )
};

Input.propTypes = {
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  size: 'middle',
  placeholder: 'This is Input',
};

export default Input;
