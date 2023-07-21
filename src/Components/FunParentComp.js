import React, {useState} from "react";
import FunChildComp from "./FunChildComp";

const FunParentComp = () => {
    const [Data, setData] = useState([1,2,3,4,5])
    const Obj =  {
            Name: "EA23",
            Month: "March"}
            
    return(
        <>
            <FunChildComp data = {Data}/>
            <FunChildComp value = {Obj}/>
        </>
    )
}

export default FunParentComp