import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        onClick={this.props.handler}
        className={"singeTask " + this.props.isDone}
      >
        {this.props.name}
      </li>
    );
  }
}

export default Task;
