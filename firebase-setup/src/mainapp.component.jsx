import { Component } from "react";
import LoginComp from "./login.component";
import UsersComp from "./user.component";

class MainApp extends Component{
    render(){
        return <div className="container">
                    <h1>Welcome to My Application</h1>
                    <UsersComp/>
                    <LoginComp/>
                </div>
    }
}

export default MainApp