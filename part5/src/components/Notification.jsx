import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({message}) => <p className='ErrorMessage'>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
