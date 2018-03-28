import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles (Pure CSS from TruffleBox)
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

// To make buttons links 
const rootLink = props => <Link to="/" {...props} />
const profileLink = props => <Link to="/profile" {...props} />;
const dashboardLink = props => <Link to="/dashboard" {...props} />;

class App extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <div>
        <Button component={dashboardLink} color="secondary" style={{fontFamily:'Oswald'}}>Dashboard</Button>
        <Button component={profileLink} color="secondary" style={{fontFamily:'Oswald'}}>Profile</Button>
        <LogoutButtonContainer />
      </div>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <LoginButtonContainer />
    )

    return (
      <div className="App">
        <AppBar color="primary" position="static">
          <Toolbar style={{display: 'flex', justifyContent: 'space-between' }}>
            <Button component={rootLink} color="secondary" style={{fontFamily:'Oswald', fontWeight:'bold'}}>Title</Button>
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </Toolbar>
        </AppBar>

        {this.props.children}
      </div>
    );
  }
}

export default App
