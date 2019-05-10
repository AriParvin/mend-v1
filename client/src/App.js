import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './com/Navbar'
import AddGuide from './com/Guides/Add'
import List from './com/Guides/List'
import { Switch, Route } from 'react-router-dom'
import GuideDetails from './com/Guides/Details'
import EditGuide from "../src/com/Guides/Edit";
import { addGuide } from './service/api';



function App() {
  return (
    <div className="App">
      <Navbar />


      <Switch>
        <Route
          exact path='/'

        />
        <Route
          exact path='/guides/create'
          render={(props) => <AddGuide {...props} />}

        />
        <Route
          exact path='/guides'
          render={() => <><List /> </>}

        />
        <Route
          exact path='/guides/:id'
          render={(props) => <GuideDetails {...props} />}
        />
        <Route
          exact path='/guides/edit/:id'
          render={(props) => <EditGuide {...props} />}

        />

      </Switch >
    </div>
  );
}

export default App;
