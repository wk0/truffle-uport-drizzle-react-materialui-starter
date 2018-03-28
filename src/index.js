import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { DrizzleProvider } from 'drizzle-react'
// From UPort
import { UserIsAuthenticated } from './util/wrappers.js'

// Layouts
import App from './App'
import HomeContainer from './layouts/home/HomeContainer'
import LoadingContainer from './layouts/loading/LoadingContainer'

// Layouts from UPort 
import Dashboard from './layouts/dashboard/Dashboard'
import Profile from './user/layouts/profile/Profile'

// Contracts
import ComplexStorage from './../build/contracts/ComplexStorage.json'
import SimpleStorage from './../build/contracts/SimpleStorage.json'
import TutorialToken from './../build/contracts/TutorialToken.json'

// Redux Store
import store from './store'

// Set up Material-UI
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// Checkout https://material.io/color/
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#534bae',
      main: '#1a237e',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffe5',
      main: '#ffecb3',
      dark: '#cbba83',
      contrastText: '#000000',
    },
  },
});

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Set Drizzle options.
const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545'
    }
  },
  contracts: [
    ComplexStorage,
    SimpleStorage,
    TutorialToken
  ],
  events: {
    SimpleStorage: ['StorageSet']
  }
}

ReactDOM.render((
    <DrizzleProvider options={options}>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <LoadingContainer>
            <Router history={history}>
              <Route path="/" component={App}>
                <IndexRoute component={HomeContainer} />
                <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
                <Route path="profile" component={UserIsAuthenticated(Profile)} />
              </Route>
            </Router>
          </LoadingContainer>
        </Provider>
      </MuiThemeProvider>
    </DrizzleProvider>
  ),
  document.getElementById('root')
);
