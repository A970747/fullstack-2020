import React, {useState, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a Form component
 * @name Togglable
 * @component
 * @property {string} userName - stores value from user text user name input
 * @property {string} password - stores value from user password input
 *
 * @param {function} setUser - set user info in state in App.js
 * @param {function} setErrorMessage - set displayed message for 5 seconds
 */

const Togglable = React.forwardRef(({buttonLabel, children}, ref) => {
  const [visible, setVisible] = useState(false);
  const hideWhenVisibleFalse = {display: visible ? 'none' : ''};
  const showWhenVisibleTrue = {display: visible ? '' : 'none'};

  function toggleVisibility() {
    setVisible(!visible);
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisibleFalse}>
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={showWhenVisibleTrue}>
        {children}
        <button onClick={toggleVisibility}>Cancel</button>
      </div>
    </div>
  );
});

Togglable.displayName = 'Togglable';
Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Togglable;
