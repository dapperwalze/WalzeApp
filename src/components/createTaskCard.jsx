import React, { Component } from "react";
import AddTaskInputField from "./addTaskInputField";
import { TaskButtons } from "./TaskButtons";

class CreateTaskCard extends Component {
  render() {
    const {
      inputValue,
      handleInputChange,
      handleSubmitTask,
      handleClick,
    } = this.props;

    return (
      <div className="card">
        <div className="card-header ">Create Task</div>
        <div className="card-body">
          <form onSubmit={handleSubmitTask}>
            <AddTaskInputField
              id={"addTaskInputField"}
              type={"text"}
              placeholder={"Add Task"}
              className={"form-control"}
              handleInputChange={handleInputChange}
              inputValue={inputValue}
            />
            <TaskButtons
              disabled={inputValue.trim() === "" ? true : false}
              type={"submit"}
              value={"Add Task"}
              className={"btn btn-primary"}
              handleClick={handleClick}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default CreateTaskCard;
