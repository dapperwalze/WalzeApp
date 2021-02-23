import React, { Component } from "react";

class DisplayUncompletedTasks extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header ">Uncompleted Tasks</div>
        <div className="card-body">
          <div className="list-group">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default DisplayUncompletedTasks;
