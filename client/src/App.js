import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './com/Navbar'
import AddGuide from './com/Guides/Add'
import List from './com/Guides/List'
import { Switch, Route, Link } from 'react-router-dom'
import GuideDetails from './com/Guides/Details'
import EditGuide from "../src/com/Guides/Edit";
import { addGuide, loggedin } from './service/api';
import Landing from './com/Landing'
import Login from './com/Auth/Login'
import Signup from './com/Auth/Signup'
import Footer from './com/Footer'
import Store from './com/Store'



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
            exact path='/store'
            render={() => <Store />}

          />
          <Route
            exact path='/login'
            render={() => <Login setUser={this.setUser} />}


          />
          <Route
            exact path='/signup'
            render={() => <Signup setUser={this.setUser} />}

          />
          <Route
            exact path='/help/project'
            render={() => <div className='project-help'>
              <h1>I need help with an Ambitious Project</h1>
              <p>Email one of our experts for help and meet them at our workshops happening every Saturday at Café Lulu at Buttmannstrasse 1, 13357.</p>
              <div className='helpers'>
                <img src='https://i.postimg.cc/59skTzM2/James-Witfield.png'></img>
                <img src='https://i.postimg.cc/bNMVNjrX/Lena-Marie.png'></img>
              </div>
            </div>}

          />
          <Route
            exact path='/workshops'
            render={() => <>
              <div className='landing-options'>
                <h1>Workshops</h1>
                <div id='diy-header'>We offer in person diys to solve questions raised from the online material and assist you in more ambitiuos projects.</div>
                <Link className='landing-options-workshop' to='/help/project'>I need help with an ambitious project</Link>
                <Link className='landing-options-workshop' to='/help'>I need general assistance</Link>
              </div>
            </>}
          />
          <Route
            exact path='/diy'
            render={() => <>
              <div className='landing-options'>
                <h1>Cleaning and Repairing DIY Videos and Guides</h1>
                <div id='diy-header'>Detailed information on how to fix your damaged garments</div>
                <Link className='landing-options-diy' to='/help/project'>Repairing</Link>
                <Link className='landing-options-diy' to='/help'>Cleaning</Link>
                <Link className='landing-options-diy' to='/guides'>All Guides</Link>
              </div>
            </>}
          />

        </Switch >
        <Footer />
      </div>
    );
  }
}


