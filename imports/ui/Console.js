import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';


export default class Console extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
            foo: "var",
            textList : [">"],
          };

        

      }

    handleSubmit(){
        event.preventDefault();

        const text = ReactDOM.findDOMNode(this.refs.con_textentry).value.trim();
        var array =this.state.textList;
        array.push("> " + text); 
        this.setState({
            textList:array,       
        });
        
        console.log(text);
        ReactDOM.findDOMNode(this.refs.con_textentry).value = "";

    }

    renderText(){
        return this.state.textList.map((text) => (
            <div> {text} </div>
          ));
    }

    render(){
        return(
        <div className="console">
            <div ref="con_screen_container" className="consoleScreenContainer">
                <div ref="con_screen" className="consoleScreen">
                {this.renderText()}
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