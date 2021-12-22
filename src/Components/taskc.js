import SingleTask from "./singletask.js";

function TaskContainer(props) {
  const tasksRender = props.tasks.map((task) => (
    <SingleTask
      message={task.message}
      index={task.index}
      handRemove={props.handRemove}
    />
  ));
  return <div className="task-container">{tasksRender}</div>;
}

export default TaskContainer;
