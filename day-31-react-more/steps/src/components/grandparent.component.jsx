import { useState } from "react";
import { FamilyContext } from "../contexts/family.context";
import ParentComp from "./parent.component";

let GrandParentComp =() =>{
    let [power,changePower] = useState(0)

    let clickHandler = ()=>{
       changePower(Math.round( Math.random() * 1000 ))
    }
    return <div style={ { border : "2px solid red", padding : "10px"} } className="container">
                    <h2>GrandParent Component | Power : { power } </h2>
                    <button onClick={ clickHandler }>Change Power</button>
                    <hr />
                    <FamilyContext.Provider value={ power }>
                        <ParentComp/>
                    </FamilyContext.Provider>
                </div>
}

export default GrandParentComp