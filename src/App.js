import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/navBar";
import CreateTaskCard from "./components/createTaskCard";
import DisplayUncompletedTasks from "./components/displayUncompletedTasks";
import DisplayCompletedTasks from "./components/displayCompletedTasks";
import "bootstrap/dist/css/bootstrap.min.css";
import "rodal/lib/rodal.css";
import "./App.css";
import TaskItem from "./components/taskItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      value: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitTask = this.handleSubmitTask.bind(this);
    this.handleTaskEditing = this.handleTaskEditing.bind(this);
    this.handleTaskStatus = this.handleTaskStatus.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
  }

  handleInputChange(newTask) {
    this.setState({
      value: newTask,
    });
  }

  handleTaskEditing(editTask) {
    this.setState({
      value: editTask,
    });
  }

  handleSubmitTask(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([
        {
          id: uuidv4(),
          task: this.state.value,
          isTaskComplete: false,
          isFavorite: false,
        },
      ]),
      value: "",
    });
  }

  handleTaskStatus(taskName) {
    const tasks = [...this.state.tasks];
    const tasksIndex = tasks.indexOf(taskName);
    tasks[tasksIndex] = { ...tasks[tasksIndex] };
    tasks[tasksIndex].isTaskComplete = !tasks[tasksIndex].isTaskComplete;

    this.setState({ tasks });
  }

  handleFavorite(taskName) {
    const tasks = [...this.state.tasks];
    const tasksIndex = tasks.indexOf(taskName);
    tasks[tasksIndex] = { ...tasks[tasksIndex] };
    tasks[tasksIndex].isFavorite = !tasks[tasksIndex].isFavorite;
    this.setState({ tasks });
  }

  handleDeleteTask(taskId) {
    const deleteTask = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({
      tasks: deleteTask,
    });
  }

  handleTaskUpdate(task, update) {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.indexOf(task);
    tasks[taskIndex] = { ...tasks[taskIndex], task: update };

    this.setState({ tasks });
  }

  componentDidMount() {
    const locallyStoredValue = localStorage.getItem("taskList");
    const parsedTaskItem = JSON.parse(locallyStoredValue);
    this.setState({
      tasks: parsedTaskItem || [],
    });
  }

  componentDidUpdate() {
    const taskItem = JSON.stringify(this.state.tasks);
    localStorage.setItem("taskList", taskItem);
  }

  render() {
    const taskList = this.state.tasks;
    const completedTasks = taskList.filter(
      (taskName) => taskName.isTaskComplete
    );
    const uncompletedTasks = taskList.filter(
      (taskName) => !taskName.isTaskComplete
    );
    return (
      <div className="App">
        <NavBar appName={"WalzeApp"} />
        <div className="container">
          <div className=" row justify-content-center align-item-center">
            <div className=" col-sm-12 col-lg-5">
              <CreateTaskCard
                handleInputChange={this.handleInputChange}
                handleSubmitTask={this.handleSubmitTask}
                inputValue={this.state.value}
              />
            </div>
          </div>

          <div className="row justify-content-center align-item-center">
            <div className="col-sm-12 col-lg-5">
              {uncompletedTasks.length > 0 && (
                <DisplayUncompletedTasks>
                  {uncompletedTasks.map((task) => {
                    return (
                      <TaskItem
                        key={task.id}
                        task={task}
                        onCompleteToggle={this.handleTaskStatus}
                        onFavouriteToggle={this.handleFavorite}
                        onDelete={this.handleDeleteTask}
                        onUpdate={this.handleTaskUpdate}
                      />
                    );
                  })}
                </DisplayUncompletedTasks>
              )}
            </div>
          </div>

          <div className="row justify-content-center align-item-center">
            <div className="col-sm-12 col-lg-5">
              {completedTasks.length > 0 && (
                <DisplayCompletedTasks>
                  {completedTasks.map((task) => {
                    return (
                      <TaskItem
                        key={task.id}
                        task={task}
                        onCompleteToggle={this.handleTaskStatus}
                        onFavouriteToggle={this.handleFavorite}
                        onDelete={this.handleDeleteTask}
                        onUpdate={this.handleTaskUpdate}
                      />
                    );
                  })}
                </DisplayCompletedTasks>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
