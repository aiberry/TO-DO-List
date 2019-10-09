import React from 'react';
import PropTypes from 'prop-types';

function Task(props) {
  return (
    <li onClick={props.handler} className={'singeTask ' + props.statusClass}>
      {props.name}
    </li>
  );
}

Task.propTypes = {
  handler: PropTypes.func,
  statusClass: PropTypes.string,
  name: PropTypes.string
};

export default Task;
