import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import ContactUs from './components/ContactUs/ContactUs';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Trainers from './components/Trainers/Trainers';
import TrainerDetails from './components/TrainerDetails/TrainerDetails';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import AddCourse from './components/Admin/AddCourse';
import AddTrainer from './components/Admin/AddTrainer';
import AuthProvider from './components/context/AuthProvider';

const App = () => {
  return (
    <div>
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/courses">
          <Courses></Courses>
        </Route>
        <Route path="/courses/:slug">
          <CourseDetails></CourseDetails>
        </Route>
        <Route exact path="/trainers">
          <Trainers></Trainers>
        </Route>
        <Route path="/trainers/:id">
          <TrainerDetails></TrainerDetails>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/addcourse">
          <AddCourse></AddCourse>
        </Route>
        <Route path="/addtrainer">
          <AddTrainer></AddTrainer>
        </Route>
      </Switch>
      
      <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>  
    </div>
  );
};

export default App;