import React from "react";

export default class NewEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: {
        id: Math.floor(Math.random() * 100),
        employee_name: "",
        employee_salary: 0,
        employee_age: 0,
        comments: ""
      }
    };
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    let { emp } = this.state;
    emp[name] = value;
    this.setState({ emp });
    console.log(this.state.emp);
  }

  render() {
    return (
      <div>
        <h3>
          <u>New Employee Records</u>
        </h3>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <b>Name : </b>
              </td>
              <td>
                <b>
                  <input
                    type="text"
                    name="employee_name"
                    value={this.state.emp.employee_name}
                    onChange={e => this.handleUserInput(e)}
                    placeholder="Employee Name"
                  />
                </b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Salary : </b>
              </td>
              <td>
                <b>
                  <input
                    type="text"
                    name="employee_salary"
                    value={
                      this.state.emp.employee_salary === 0
                        ? ""
                        : this.state.emp.employee_salary
                    }
                    onChange={e => this.handleUserInput(e)}
                    placeholder="Employee Salary"
                  />
                </b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Age : </b>
              </td>
              <td>
                <b>
                  <input
                    type="text"
                    name="employee_age"
                    value={
                      this.state.emp.employee_age === 0
                        ? ""
                        : this.state.emp.employee_age
                    }
                    onChange={e => this.handleUserInput(e)}
                    placeholder="Employee Age"
                  />
                </b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Comments : </b>
              </td>
              <td>
                <b>
                  <input
                    type="text"
                    name="comments"
                    value={this.state.emp.comments}
                    onChange={e => this.handleUserInput(e)}
                    placeholder="Remarks/Comments"
                  />
                </b>
              </td>
            </tr>
            <tr>
              <td align="center" colSpan="2">
                <button
                  className="btn btn-success"
                  onClick={() => this.props.addNewEmp(this.state.emp)}
                >
                  Save
                </button>
                <button
                  className="btn btn-info"
                  onClick={this.props.cancleNewEmployee}
                >
                  Cancle
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
