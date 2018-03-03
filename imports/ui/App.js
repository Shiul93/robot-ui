import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Console from './Console.js';



// App component - represents the whole app
class App extends Component {
  
  renderUI(){
    return(<Console/>)
  }
  render() {
    return (
      <div className="container">
        <header>
        <div className="icon-bar">
          <a className="active" href="#"><i className="fa fa-home"></i></a> 
          <a href="#"><i className="fa fa-search"></i></a> 
          <a href="#"><i className="fa fa-envelope"></i></a> 
          <a href="#"><i className="fa fa-globe"></i></a>
          <a href="#"><i className="fa fa-trash"></i></a> 
        </div>
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