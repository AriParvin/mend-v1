import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './com/Navbar'
import AddGuide from './com/Guides/Add'
import List from './com/Guides/List'
import { Switch, Route } from 'react-router-dom'
import GuideDetails from './com/Guides/Details'
import EditGuide from "../src/com/Guides/Edit";
import { addGuide, loggedin } from './service/api';
import Landing from './com/Landing'
import Login from './com/Auth/Login'
import Signup from './com/Auth/Signup'



export default class App extends React.Component {
  state = {
    loggedIn: null
  }

  setUser = user => {
    this.setState({
      loggedIn: user
    });
  };

  getUser = () => {
    loggedin().then(user => {
      this.setState({
        loggedIn: user
      });
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div className="App" >
        <Navbar setUser={this.setUser} loggedIn={this.state.loggedIn} />



        <Switch>
          <Route
            exact path='/'
            render={() => <><Landing /></>}

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
          <Route
            exact path='/login'
            render={() => <Login setUser={this.setUser} />}


          />
          <Route
            exact path='/signup'
            render={() => <Signup setUser={this.setUser} />}

          />

        </Switch >
      </div>
    );
  }
}


