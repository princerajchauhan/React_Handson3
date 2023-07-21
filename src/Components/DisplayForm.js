import React, { Component } from 'react'
import "./FormClass.css"

class DisplayForm extends Component {

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "30px" }}>
                <h1>EMPLOYEE FEEDBACK DATA</h1>

                <div id='Element'>
                    {
                        this.props.value.EmpData.map((element, index) => {
                            return (
                                    <div key={index} id="elementData">
                                        <span>Name : {element.name} | </span>
                                        <span>Department : {element.Dept} | </span>
                                        <span>Rating : {element.Rate}</span>
                                    </div>
                            )
                        })
                    }
                </div>

                <button onClick={this.props.toggleFun}>Go Back</button>
            </div>
        )
    }
}

export default DisplayForm