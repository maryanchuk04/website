import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Mainpage from "./components/MainPage/Mainpage";
import AdminPage from './components/AdminPage/AdminPage';
import Best from './components/AdminPage/components/Best';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path = '/' exact element = {<React.Fragment><Header/><Mainpage/><Footer/></React.Fragment>} />          
          <Route path = '/admin' exact element={<AdminPage/>} />
          <Route path = '/admin/best' exact element={<Best/>} />
        </Routes>
      </BrowserRouter>
       
      </div>
    );
  }
}
