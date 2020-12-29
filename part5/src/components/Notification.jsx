import React from 'react';
import PropTypes from 'prop-types';

/**
 * Passed a message to be displayed.
 * @name Notification
 * @component
 *
 * @param {string} message - Messages from successful(or not) backend calls.
 */

const Notification = ({message}) => <p className='ErrorMessage'>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
