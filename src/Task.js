import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

export default function Task({handler, status, name}) {
  return (
    <li
      onClick={handler}
      className={status === 'done' ? styles.viewDone : styles.viewUndone}
    >
      {name}
    </li>
  );
}

Task.propTypes = {
  handler: PropTypes.func,
  status: PropTypes.string,
  name: PropTypes.string
};
