import React, { Component } from "react";
import "../App.css";

import EmployeeRow from "./empComponents/EmployeeRow";
import NewEmployee from "./empComponents/NewEmployee";

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
          comments: "I m from id: 5915"
        },
        {
          id: "5919",
          employee_name: "testS1",
          employee_salary: "123",
          employee_age: "23",
          comments: "i m from id: 5919"
        }
      ],
      newEmploye: false
    };
    //this.updateComments = this.updateComments.bind(this);
    this.createNewEmployee = this.createNewEmployee.bind(this);
  }

  updateComments = emp => {
    console.log("emp object", emp);
    let { employees } = this.state;
    const index = employees.findIndex(employee => employee.id === emp.id);

    employees[index] = emp;
    this.setState({ employees });

    alert("Your new Comments are updated");
  };

  createNewEmployee() {
    console.log("Create New Employee");
    this.setState({ newEmploye: !this.state.newEmploye });
  }

  addNewEmp = emp => {
    console.log("addNewEmp emp object", emp);
    let { employees } = this.state;
    employees.push(emp);
    this.setState({ employees });
    this.createNewEmployee();
  };

  deleteEmp = empId => {
    let { employees } = this.state;
    const index = employees.findIndex(employee => employee.id === empId);
    employees.splice(index, 1);
    this.setState({ employees });
  };

  render() {
    return (
      <div>
        <h3>Employee Records:</h3>
        <table className="table table-light table-striped table-bordered">
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
              <th>
                <b>Options</b>
              </th>
            </tr>
            {this.state.employees.map((employee, index) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                updateComments={this.updateComments}
                deleteEmp={this.deleteEmp}
              />
            ))}
            <tr key="9999">
              <td align="center" colSpan="4">
                {!this.state.newEmploye && (
                  <button
                    className="btn btn-primary"
                    onClick={this.createNewEmployee}
                  >
                    Add New Employee
                  </button>
                )}
                {this.state.newEmploye && (
                  <NewEmployee
                    addNewEmp={this.addNewEmp}
                    cancleNewEmployee={this.createNewEmployee}
                  />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
