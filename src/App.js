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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        
      <Switch>
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

      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;