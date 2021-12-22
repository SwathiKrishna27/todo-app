import React from "react";
import TaskContainer from "./taskc";
//import SingleTask from './SingleTask'

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      numChildren: 0,
      newMessage: "What to do next?"
    };
    this.onAddChild = this.onAddChild.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handRemove = this.handRemove.bind(this);
  }

  onAddChild = (msg) => {
    let index = this.state.children.length + 1;
    let newArray = this.state.children.concat({ index: index, message: msg });
    this.setState({ children: newArray });
    //console.log(this.state.children)
  };

  handleChange(event) {
    this.setState({ newMessage: event.target.value });
  }

  handRemove(index) {
    let newArray = this.state.children.filter((task) => task.index !== index);
    this.setState({ children: newArray });
  }

  render() {
    return (
      <div className="app-container">
        <div className="new-task-container">
          <input
            type="text"
            id="taskInput"
            defaultValue="What to do next?"
            maxlength="50"
            value={this.state.newMessage}
            onChange={this.handleChange}
          />
          <div
            className="addTask"
            id="addTask"
            onClick={() => {
              //let text = document.getElementById("taskInput").value;
              //this.setState({ newMessage: text })
              this.onAddChild(this.state.newMessage);
            }}
          >
            <div className="add-button">Add task</div>
          </div>
        </div>
        <TaskContainer
          tasks={this.state.children}
          handRemove={this.handRemove}
        />
      </div>
    );
  }
}
export default AppContainer;
