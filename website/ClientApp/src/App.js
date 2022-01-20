import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./components/Shared/Footer";

import Mainpage from "./components/MainPage/Mainpage";
import AdminPage from './components/AdminPage/AdminPage';

import News from './components/AdminPage/components/News.js'

import './custom.css'
import Employers from './components/AdminPage/components/Employers';
import Login from './components/Shared/Login';
import Header from './components/Shared/Header';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path = '/' exact element = {<React.Fragment><Mainpage/><Footer/></React.Fragment>} />          

         

          <Route path = '/admin' exact element={<Login/>} />
          <Route path = '/admin/employers' exact element={<Employers/>} />
          <Route  path ='/admin/news' exact element ={<News/>}/>
          

        </Routes>
      </BrowserRouter>
       
      </div>
    );
  }
}
