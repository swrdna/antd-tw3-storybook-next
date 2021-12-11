import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as AntCheckbox } from 'antd';

const Checkbox = ({ label }) => {
  return (
    <AntCheckbox>{label}</AntCheckbox>
  )
};

Checkbox.propTypes = {
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  label: 'This is checkbox',
};

export default Checkbox;
