import React from 'react';
import PropTypes from 'prop-types';

export default function Task({handler, status, name}) {
  return (
    <li
      onClick={handler}
      className={'singeTask ' + (status === 'done' ? 'classDone' : 'classUndone')}
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
