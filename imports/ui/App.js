import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Console from './Console.js';
import Broker from './Broker.js';



// App component - represents the whole app
class App extends Component {
  
  renderUI(){
    var br = new Broker();
    const echoFun = (text, response)=>{}



    return(
      <div>
      <Console textCallback={echoFun} broker={br} id ={"c1"} suscriptions={["c2"]}/>
      <Console textCallback={echoFun} broker={br} id ={"c2"} suscriptions={["c1"]}/>
      <Console textCallback={echoFun} broker={br} id ={"c3"} suscriptions={["c1"]}/>
      <Console textCallback={echoFun} broker={br} id ={"c4"} suscriptions={["c1"]}/>

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