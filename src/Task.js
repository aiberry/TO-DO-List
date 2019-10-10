import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

export default function Task({handler, status, name}) {
  return (
    <li
      onClick={handler}
      className={'singeTask ' + (status === 'done' ? 'viewDone' : 'viewUndone')}
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
