import React from "react";

let Task = function(props) {
  return (
    <li onClick={props.handler} className={"singeTask " + props.isDone}>
      {props.name}
    </li>
  );
};

export default Task;
