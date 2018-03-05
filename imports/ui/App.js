import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Console from './Console.js';
import Broker from './Broker.js';



// App component - represents the whole app
class App extends Component {
  constructor(props){
    super(props);

    this.state={
      broker: new Broker(),
    };

  }
  renderUI(){
    
    const echoFun = (text, response)=>{}



    return(
      <div>
      <Console textCallback={echoFun} broker={this.state.broker} id ={"c1"} subscriptions={["c2"]}/>
      <Console textCallback={echoFun} broker={this.state.broker} id ={"c2"} subscriptions={["c1"]}/>
      <Console textCallback={echoFun} broker={this.state.broker} id ={"c3"} subscriptions={["c1"]}/>
      <Console textCallback={echoFun} broker={this.state.broker} id ={"c4"} subscriptions={["c1"]}/>

      </div>);
  }

  renderTopBar(){
        <div className="icon-bar">
          <a className="active" href="#"><i className="fa fa-home"></i></a> 
          <a href="#"><i className="fa fa-search"></i></a> 
          <a href="#"><i className="fa fa-envelope"></i></a> 
          <a href="#"><i className="fa fa-globe"></i></a>
          <a href="#"><i className="fa fa-trash"></i></a> 
        </div>
  }

  render() {

    return (
      <div className="container">
        <header>
          {this.renderTopBar()}
        </header>

        <div>
          {this.renderUI()}
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    
  };
})(App);