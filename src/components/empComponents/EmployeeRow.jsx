import React from "react";

import EditCommentsRow from "./EditCommentsRow";

export default class EmployeeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allowEdit: false };
  }
  editComments = () => {
    this.setState({ allowEdit: !this.state.allowEdit });
  };

  render() {
    let employee = this.props.employee;
    return (
      <tr>
        <td>{employee.id}</td>
        <td>{employee.employee_name}</td>
        <td>{employee.employee_salary}</td>
        <td>{employee.employee_age}</td>
        <td>{employee.comments}</td>
        <td>
          {!this.state.allowEdit && (
            <button className="btn btn-info" onClick={this.editComments}>
              View/Edit Comment
            </button>
          )}
          {this.state.allowEdit && (
            <EditCommentsRow
              emp={employee}
              cancleEvent={this.editComments}
              updateComments={this.props.updateComments}
              deleteEmp={this.props.deleteEmp}
            />
          )}
        </td>
      </tr>
    );
  }
}
