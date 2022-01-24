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
import SpecialityPage from './components/Speciality/SpecialityPage/SpecialityPage';
import CookingPage from './components/Speciality/CookingPage/CookingPage';
import MarketingPage from './components/Speciality/MarketingPage/MarketingPage';
import OblikPage from './components/Speciality/OblikPage/OblikPage';
import PidpruyemstvoPage from './components/Speciality/PidpruyemstvoPage/PidpruyemstvoPage';
import AchivementPage from './components/AchivementPage/AchivementPage';
import EmployersPage from './components/EmployersPage/EmployersPage';
import EntrantPage from './components/EntrantPage/EntrantPage';
import HistoryPage from './components/HistoryPage/HistoryPage';
import NewsPage from './components/NewsPage/NewsPage';
import StudentPage from './components/StudentPage/StudentPage';
import Menu from './components/Shared/Menu';

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
          <Route path ='/admin/news' exact element ={<News/>}/>

          <Route path = '/student' exact element={<StudentPage/>} />
          <Route path = '/news' exact element={<React.Fragment><Header/><Menu/><NewsPage/></React.Fragment>} />
          <Route path = '/history' exact element={<React.Fragment><Header/><Menu/><HistoryPage/><Footer/></React.Fragment>} />
          <Route path = '/entrant' exact element={<EntrantPage/>} />
          <Route path = '/employers' exact element={<EmployersPage/>} />
          <Route path = '/achivement' exact element={<AchivementPage/>} />
          <Route path = '/speciality' exact element={<React.Fragment><Header/><Menu/><SpecialityPage/></React.Fragment>} />
          <Route path = '/speciality/cooking' exact element={<React.Fragment><Header/><Menu/><CookingPage/></React.Fragment>} />
          <Route path = '/speciality/marketing' exact element={<MarketingPage/>} />
          <Route path = '/speciality/oblik' exact element={<OblikPage/>} />
          <Route path = '/speciality/pidpruyemstvo' exact element={<PidpruyemstvoPage/>} />

        </Routes>
      </BrowserRouter>
       
      </div>
    );
  }
}
