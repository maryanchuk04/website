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
import PracticePage from './components/StudentPage/PracticePage/PracticePage';
import CallShedulePage from './components/StudentPage/CallShedule/CallShedulePage';
import DetailsPaymentPage from './components/StudentPage/DetailsPayment/DetailsPaymentPage';
import SyllabusPage from './components/StudentPage/Sullabuses/SullabusesPage';
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
          <Route path = '/entrant' exact element={<React.Fragment><Header/><Menu/><EntrantPage/><Footer/></React.Fragment>} />
          <Route path = '/employers' exact element={<React.Fragment><Header/><Menu/><EmployersPage/><Footer/></React.Fragment>} />
          <Route path = '/achivement' exact element={<React.Fragment><Header/><Menu/><AchivementPage/><Footer/></React.Fragment>} />
          <Route path = '/speciality' exact element={<React.Fragment><Header/><Menu/><SpecialityPage/></React.Fragment>} />
          <Route path = '/speciality/cooking' exact element={<React.Fragment><Header/><Menu/><CookingPage/><Footer/></React.Fragment>} />
          <Route path = '/speciality/marketing' exact element={<MarketingPage/>} />
          <Route path = '/speciality/oblik' exact element={<React.Fragment><Header/><Menu/><OblikPage/><Footer/></React.Fragment>} />
          <Route path = '/speciality/pidpruyemstvo' exact element={<React.Fragment><Header/><Menu/><PidpruyemstvoPage/><Footer/></React.Fragment>} />
          <Route path = '/student/practice' exact element={<React.Fragment><Header/><Menu/><PracticePage/><Footer/></React.Fragment>} />
          <Route path = '/student/callshedule' exact element={<React.Fragment><Header/><Menu/><CallShedulePage/><Footer/></React.Fragment>} />
          <Route path = '/student/detailspayment' exact element={<React.Fragment><Header/><Menu/><DetailsPaymentPage/><Footer/></React.Fragment>} />
          <Route path = '/student/syllabus' exact element={<React.Fragment><Header/><Menu/><SyllabusPage/><Footer/></React.Fragment>} />



        </Routes>
      </BrowserRouter>
       
      </div>
    );
  }
}
