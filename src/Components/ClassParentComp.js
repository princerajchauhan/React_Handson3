import React, {Component} from "react";
import ClassChildComp from "./ClassChildComp";

class ClassParentComp extends Component {

    constructor(){
        super();
        this.state = {
            Name : "EA19",
            Student : 40
        }
    }

    render(){
        return(
            <>
                <ClassChildComp  value = {this.state}/>
            </>
        )
    }
}

export default ClassParentComp