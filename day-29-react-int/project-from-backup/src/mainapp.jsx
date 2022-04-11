import { Component } from "react";
import { extStyle } from "./mystyleconfig";
import ischool from "./clientStyle.module.css";
import "./mystyle.css";

class MainApp extends Component{
    myInCompStyle = { 
        backgroundColor : 'darkblue', 
        width : '400px',
        padding : '10px', 
        margin : "10px",
        color : "papayawhip", 
        textAlign:"justify" }
    render(){
        return <section>
                    <h1>Welcome to My Application</h1>
                    <article style={ { backgroundColor : 'crimson',margin:'10px', width : '400px',padding : '10px', color : "papayawhip", textAlign:"justify" } }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae nobis non, quidem assumenda facere minus odit ipsum unde porro architecto! Earum obcaecati totam vero provident facilis adipisci quasi sint.
                    </article>
                    <article style={ this.myInCompStyle }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae nobis non, quidem assumenda facere minus odit ipsum unde porro architecto! Earum obcaecati totam vero provident facilis adipisci quasi sint.
                    </article>
                    <article style={ this.myInCompStyle }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae nobis non, quidem assumenda facere minus odit ipsum unde porro architecto! Earum obcaecati totam vero provident facilis adipisci quasi sint.
                    </article>
                    <article style={ extStyle }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae nobis non, quidem assumenda facere minus odit ipsum unde porro architecto! Earum obcaecati totam vero provident facilis adipisci quasi sint.
                    </article>
                    <hr />
                    <article className={ischool.box}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae nobis non, quidem assumenda facere minus odit ipsum unde porro architecto! Earum obcaecati totam vero provident facilis adipisci quasi sint.
                    </article>
                    <article className="box">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae nobis non, quidem assumenda facere minus odit ipsum unde porro architecto! Earum obcaecati totam vero provident facilis adipisci quasi sint.
                    </article>
                    <article className={ischool.box}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae nobis non, quidem assumenda facere minus odit ipsum unde porro architecto! Earum obcaecati totam vero provident facilis adipisci quasi sint.
                    </article>
                    <article className="box">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae nobis non, quidem assumenda facere minus odit ipsum unde porro architecto! Earum obcaecati totam vero provident facilis adipisci quasi sint.
                    </article>
              </section>
    }
}

export default MainApp