import { Component } from "react";
import UsersComp from "./user.component";

class MainApp extends Component{
    render(){
        return <div>
                    <h1>Welcome to My Application</h1>
                    <hr />
                    <UsersComp />
                </div>
    }
}

export default MainApp