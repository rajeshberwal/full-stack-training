import { useContext } from "react";
import { FamilyContext } from "../contexts/family.context";

let ChildComp = ()=> {
   let value = useContext(FamilyContext)
   return <div style={ { border : "2px solid red", padding : "10px"} } className="container">
            <h2>Child Component</h2>
            <hr />
            {/* <FamilyContext.Consumer>{(val)=><h4>Power is : {val}</h4>}</FamilyContext.Consumer> */}
            <h4>Power is : { value }</h4>
        </div>

}

export default ChildComp