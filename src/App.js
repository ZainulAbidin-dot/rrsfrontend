import React from 'react';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/components/pages/Home';
import Services from './views/components/pages/Services';
import SignUp from './views/components/pages/SignUp';
import Contact from './views/components/pages/Contact';
import SlidesShow from "./views/components/pages/SlidesShow"
import Login from './views/components/pages/Login';
import Ticket from './views/components/pages/Ticket';
import AdminLogin from './views/components/pages/AdminLogin';
import AdminHome from './views/components/pages/AdminHome';
import AddTrain from './views/components/pages/AddTrain';
import ModifyTrain from './views/components/pages/ModifyTrain';
import ViewBook from './views/components/pages/ViewBook';
import ViewFeedback from './views/components/pages/ViewFeedback';
import ViewTrain from './views/components/pages/ViewTrain';
import UpdateTrain from './views/components/pages/UpdateTrain';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/ticket' element={<Ticket/>}/>
        <Route path='/SlidesShow' element={<SlidesShow/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}/>
        <Route path='/AdminHome' element={<AdminHome/>}/>
        <Route path='/AddTrain' element={<AddTrain/>}/>
        <Route path='/ModifyTrain' element={<ModifyTrain/>}/>
        <Route path='/ViewBook' element={<ViewBook/>}/>
        <Route path='/ViewFeedback' element={<ViewFeedback/>}/>
        <Route path='/ViewTrain' element={<ViewTrain/>}/>
        <Route path='/UpdateTrain' element={<UpdateTrain/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
