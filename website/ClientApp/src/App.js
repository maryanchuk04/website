import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./components/Shared/Footer";

import Mainpage from "./components/MainPage/Mainpage";
import AdminPage from './components/AdminPage/AdminPage';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path = '/' exact element = {<React.Fragment><Mainpage/><Footer/></React.Fragment>} />          
          <Route path = '/admin' exact element={<AdminPage/>} />
        </Routes>
      </BrowserRouter>
       
      </div>
    );
  }
}
