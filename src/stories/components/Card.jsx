import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntCard } from 'antd';

const Card = (props) => {
  return (
    <AntCard {...props} className={`rounded-lg ${props.className}`}>
      <div>{props.children}</div>
    </AntCard>
  )
};

Card.propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default']),
};

Card.defaultProps = {
  size: 'default',
};

export default Card;
