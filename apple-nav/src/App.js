import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
// import Mac from './components/products/Mac';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Route exact path="/" component={App}/>
        {/* <Route path="/mac" component={Mac}/> */}
      </div>
    );
  }
}

export default App;
