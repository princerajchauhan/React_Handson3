import React, {Component} from "react";

class ClassChildComp extends Component {
    constructor(props){
        super(props);
        // console.log(props);
    }
    render(){
        return(
            <>
                <h1>This is Class Child Component</h1>
                <h3>Name : {this.props.value.Name}</h3>
                <h3>Student : {this.props.value.Student}</h3>
            </>
        )
    }
}

export default ClassChildComp