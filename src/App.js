import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PurchaseSummary from './PurchaseSummary';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';


export class App extends Component {
  constructor(props){
    super(props)
    this.state={
     
    }
  }

  render() {
    
    return (
      <Router >
        <>
          <Header />
          <Switch>
            <Route exact path="/" ><Home /></Route>
            <Route path="/store"><Store /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/purchase-summary"><PurchaseSummary /></Route>
            
          </Switch>
          <Footer />
        </>
      </Router>
    )
  }
}



export default App

