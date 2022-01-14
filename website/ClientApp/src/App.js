import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from "./components/Shared/Header";
import AdminPage from './components/AdminPage/AdminPage';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div className="App"> 
       <Header/>
        <Route path = '/admin' component={AdminPage} />
      </div>
    );
  }
}
