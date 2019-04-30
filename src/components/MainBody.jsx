import React, { Component } from "react";
import "../App.css";

export default class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          id: "5915",
          employee_name: "Steve",
          employee_salary: "35000",
          employee_age: "120",
          comments: ""
        },
        {
          id: "5919",
          employee_name: "testS1",
          employee_salary: "123",
          employee_age: "23",
          comments: ""
        }
      ]
    };
    this.viewOrEditComments = this.viewOrEditComments.bind(this);
    this.createNewEmployee = this.createNewEmployee.bind(this);
  }

  viewOrEditComments(emp) {
    console.log("emp object", emp);
  }

  createNewEmployee() {
    console.log("Create New Employee");
  }

  render() {
    return (
      <div>
        <h3>Employee Records:</h3>
        <table className="table table-light table-striped">
          <tbody>
            <tr key="Header" className="table-danger">
              <th>
                <b>ID</b>
              </th>
              <th>
                <b>Name</b>
              </th>
              <th>
                <b>Salary</b>
              </th>
              <th>
                <b>Age</b>
              </th>
              <th>
                <b>Comments</b>
              </th>
            </tr>
            {this.state.employees.map((employee, index) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                viewOrEditComments={this.viewOrEditComments}
              />
            ))}
            <tr key="9999">
              <td>
                <button onClick={this.createNewEmployee}>
                  Add New Employee
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const EmployeeRow = props => {
  return (
    <tr>
      <td>{props.employee.id}</td>
      <td>{props.employee.employee_name}</td>
      <td>{props.employee.employee_salary}</td>
      <td>{props.employee.employee_age}</td>
      <td>
        <button onClick={() => props.viewOrEditComments(props.employee)}>
          View/Edit Comment
        </button>
      </td>
    </tr>
  );
};
