import React, { Component } from "react";

class DisplayCompletedTasks extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header ">Completed Tasks</div>
        <div className="card-body justify-content-center align-item-center">
          <div className="list-group">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default DisplayCompletedTasks;
