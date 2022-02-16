import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
      <Switch>
        <Route></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;