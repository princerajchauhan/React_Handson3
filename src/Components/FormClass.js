import React, { Component } from "react";
import DisplayForm from "./DisplayForm";
import './FormClass.css'

class FormClass extends Component {
    constructor() {
        super();
        this.state = {
            Name: '',
            Dept: '',
            Rate: '',
            clicked: true,
            EmpData: []
        }
    }

    toggleFun = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    clickHandle = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

submitFun = (e) => {
    e.preventDefault()
    if (this.state.Name && this.state.Dept && this.state.Rate) {
        const newObj = {
            name: this.state.Name,
            Dept: this.state.Dept,
            Rate: this.state.Rate
        }
        this.state.EmpData.push(newObj)
        this.setState({
            EmpData: this.state.EmpData,
            Name: '',
            Dept: '',
            Rate: '',
            clicked: false
        })
    }
    else{
        alert("Please fill all the field !!!")
    }
}

render() {
    return (
        <>

            {this.state.clicked ?
                <div style={{ textAlign: "center", paddingTop: "30px" }}>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
                    <form>
                        <label htmlFor="name">Name : </label>
                        <input type="text" id="name" name="Name" value={this.state.Name} onChange={this.clickHandle} required />
                        <br /><br />

                        <label htmlFor="dept">Department : </label>
                        <input type="text" id="dept" name="Dept" value={this.state.Dept} onChange={this.clickHandle} required />
                        <br /><br />

                        <label htmlFor="rate">Rating : </label>
                        <input type="number" id="rate" name="Rate" value={this.state.Rate} onChange={this.clickHandle} required />
                        <br /><br />

                        <button type="submit" onClick={this.submitFun}>Submit</button>
                    </form>
                </div> : <DisplayForm value={this.state} toggleFun={this.toggleFun} />
            }
        </>
    )
}
}

export default FormClass


