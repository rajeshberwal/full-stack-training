import { Component } from "react";
import { app } from "./config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider  } from "firebase/auth";


class LoginComp extends Component{
    state = {
        useremail : 'empty',
        userpass : 'pass',
        userstatus : 'not added'
    }
    auth = getAuth();
    inputHandler = (evt) => {
        this.setState({
            [evt.target.id] : evt.target.value
        })
    }
    loginHandler = ()=>{
        // createUserWithEmailAndPassword(this.auth, this.state.useremail, this.state.userpass)
        signInWithEmailAndPassword(this.auth, this.state.useremail, this.state.userpass)
        .then(res => {
            this.setState({
                userstatus : 'logged in'
            })
        })
        .catch(error => {
            console.log("Error ", error.message )
        })
    }
    render(){
        return <div>
                    <h1>New Users Signup</h1>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="usereMail" className="form-label">Email address</label>
                        <input onChange={ this.inputHandler } value={ this.state.useremail } type="email" className="form-control" id="useremail" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userPass" className="form-label">Password</label>
                        <input onChange={ this.inputHandler } value={ this.state.userpass } type="password" className="form-control" id="userpass" />
                    </div>
                    <button onClick={ this.loginHandler } type="submit" className="btn btn-primary">Register</button>
                    <ul>
                        <li>User Email : { this.state.useremail }</li>
                        <li>User Password : { this.state.userpass }</li>
                    </ul>
                    <h4>{ this.state.userstatus }</h4>
                </div>
    }
}

export default LoginComp