import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import StayScrolled from 'react-stay-scrolled';
import Broker from "./Broker.js";


export default class Console extends Component{
    constructor(props) {

        super(props);

        
        //Should be of the form method(text, responseHandle)
     
        this.state = {
            id:props.id,
            broker:props.broker,
            textCallback:props.textCallback,
            foo: "var",
            textList : ["Console Id: "+props.id],
          };

         
        const  addTxt=(text)=>{
            var array =this.state.textList;
            array.push(text); 
            this.setState({
                textList:array,       
            });
        }
        if (props.subscriptions){
        props.subscriptions.forEach(id => {
            this.state.broker.subscribe(id,addTxt);
        });
    }

        

        

      }

    
    
    handleSubmit(event){
        
        event.preventDefault();
        const addTxt=(text)=>{
            var array =this.state.textList;
            array.push(text); 
            this.setState({
                textList:array,       
            });
        }
        const text = ReactDOM.findDOMNode(this.refs.con_textentry).value.trim();
        addTxt("> " + text);
        this.state.broker.post(text,this.state.id);
        this.state.textCallback(text,addTxt);
        
        this.scrollToBottom();
        ReactDOM.findDOMNode(this.refs.con_textentry).value = "";

    }

    renderText(){
        
        return (<StayScrolled component="div">
            {
                this.state.textList.map((text) => (
            <div> {text} </div>))}
            </StayScrolled >
          );
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      

    render(){
        return(
        <div className="console">
            <div ref="con_screen_container" className="consoleScreenContainer">
                <div> 
                    
                    <div ref="con_screen" className="consoleScreen">
                        {this.renderText()}
                        <div style={{ float:"left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                </div>
            </div>

            <div ref="con_input_container" className="consoleInputContainer" onSubmit={this.handleSubmit.bind(this)}>
                <form >
                
                    <label > > </label>
                
                    <input type="text" ref="con_textentry" className="consoleTextInput" />
               
                </form>

            </div>
            
        </div>
        )
    }

}