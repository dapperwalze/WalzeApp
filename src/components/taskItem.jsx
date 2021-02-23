import React from "react";
import Rodal from "rodal";

import AddTaskInputField from "./addTaskInputField";
import { TaskButtons } from "./TaskButtons";
import CallToActionButton from "./callToActionButton";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BsHeartFill } from "react-icons/bs";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      modalIsVisible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(input) {
    this.setState({ input });
  }

  showModal() {
    const { task } = this.props;
    this.setState({
      modalIsVisible: true,
      input: task.task,
    });
  }

  hideModal() {
    this.setState({
      modalIsVisible: false,
      input: "",
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.hideModal();
    this.props.onUpdate(this.props.task, this.state.input);
  }

  render() {
    const { task, onCompleteToggle, onFavouriteToggle, onDelete } = this.props;

    return (
      <div className="taskListContainer">
        <button
          value={task.task}
          className=" list-group-item list-group-item-action taskList"
        >
          {task.task}
        </button>
        <div className="text-center">
          <CallToActionButton
            type={"button"}
            handleClick={this.showModal}
            className={"btn btn-primary cta"}
            title={"Edit Task"}
          >
            <FiEdit title={"Edit Task"} />
          </CallToActionButton>
          <CallToActionButton
            type={"button"}
            title={"Done?"}
            className={"btn btn-light cta"}
            handleClick={() => onCompleteToggle(task)}
          >
            {task.isTaskComplete ? (
              <MdCheckBox color={"green"} title={"Done"} />
            ) : (
              <MdCheckBoxOutlineBlank title={"Undone"} />
            )}
          </CallToActionButton>
          <CallToActionButton
            type={"button"}
            title={"Favorite"}
            className={"btn btn-light cta"}
            handleClick={() => onFavouriteToggle(task)}
          >
            {task.isFavorite ? (
              <BsHeartFill color={"red"} title={"Favorited"} />
            ) : (
              <BsHeart title={"Favorite?"} />
            )}
          </CallToActionButton>

          <CallToActionButton
            type={"button"}
            title={"Delete Task"}
            handleClick={() => onDelete(task.id)}
            className={"btn btn-danger cta"}
          >
            <RiDeleteBinLine title={"Delete Task"} />
          </CallToActionButton>
        </div>
        <Rodal visible={this.state.modalIsVisible} onClose={this.hideModal}>
          <div>Task</div>

          <form onSubmit={this.handleFormSubmit}>
            <div className="row">
              <AddTaskInputField
                id={"addTaskInputField"}
                type={"text"}
                placeholder={"Add Task"}
                className={"form-control editFormControl"}
                handleInputChange={this.handleInputChange}
                inputValue={this.state.input}
              />
            </div>

            <div className="row updateTaskButton">
              <div className="col"></div>
              <div className="col-5">
                <TaskButtons
                  type={"submit"}
                  value={"Update Task"}
                  className={"btn btn-primary "}
                />
              </div>
              <div className="col"></div>
            </div>
          </form>
        </Rodal>
      </div>
    );
  }
}

export default TaskItem;
