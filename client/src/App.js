import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './com/Navbar'
import AddGuide from './com/Guides/Add'
import List from './com/Guides/List'
import { Switch, Route } from 'react-router-dom'
import GuideDetails from './com/Guides/Details'


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AddGuide /> */}

      <Switch>
        <Route
          exact path='/'

        />
        <Route
          exact path='/guides'
          render={() => <List />}
        />
        <Route
          exact path='/guides/:id'
          render={(props) => <GuideDetails {...props} />}
        />

      </Switch >
    </div>
  );
}

export default App;
