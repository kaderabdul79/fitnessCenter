import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import ContactUs from './components/ContactUs/ContactUs';
import About from './components/About/About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        
      <Switch>

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