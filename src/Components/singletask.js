import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

class SingleTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }
  render() {
    return (
      <div className="singleTask">
        <p>{this.props.message}</p>
        <div
          className="removeTask"
          onClick={(event) => {
            setTimeout(() => {
              let index = this.props.index;
              this.props.handRemove(index);
            }, 350);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    );
  }
}

export default SingleTask;
