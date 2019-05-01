import React from "react";

export default class EditCommentsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emp: props.emp };
  }

  inputTextChange = e => {
    let { emp } = this.state;
    emp.comments = e.target.value;
    this.setState(emp);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name={"txt" + this.props.emp.id}
          value={this.state.emp.comments}
          onChange={this.inputTextChange}
        />
        <br />
        <br />
        <button
          className="btn btn-success"
          onClick={() => {
            this.props.updateComments(this.state.emp);
            this.props.cancleEvent();
          }}
        >
          Update
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.deleteEmp(this.state.emp.id)}
        >
          Delete
        </button>
        <button className="btn btn-info" onClick={this.props.cancleEvent}>
          Cancle
        </button>
      </div>
    );
  }
}
