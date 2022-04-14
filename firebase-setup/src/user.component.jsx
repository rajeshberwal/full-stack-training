import { Component } from "react";
import axios from "axios";

class UsersComp extends Component{
    state = {
        users : []
    }
   /*  componentDidMount(){
        // ajax
        axios.get("https://reqres.in/api/users").then( (res)=> {
            // console.log(res.data.data);
            this.setState({
                users : res.data.data
            })
        })
    } */
    getUserData = ()=>{
        axios.get("https://reqres.in/api/users").then( (res)=> {
            // console.log(res.data.data);
            this.setState({
                users : res.data.data
            })
        })
    }
    render(){
        return <div>
                    <h1>Users List</h1>
                    <button onClick={ this.getUserData }>Get Data</button>
                    <div>{
                        this.state.users.map( user => {
                            return <article key={user.id}>
                                <img src={ user.avatar } width="100"/> 
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                { user.id } { user.first_name +" "+ user.last_name }
                                </article>
                        })
                        }</div>
                </div>
    }
}

export default UsersComp