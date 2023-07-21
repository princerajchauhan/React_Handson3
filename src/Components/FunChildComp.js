import React from "react";

const FunChildComp = (props) => {
    console.log(props)
    return(
        <>
            <h1>This is child Components</h1>
            {props.value.Name}<br/> 
            {props.value.Month}
            <br/>
            {/* {props.data} */}

            {/* {
                props.data.map((element) => {
                    <h3>{element}</h3>
                })
            } */}
        </>
    )
}

export default FunChildComp