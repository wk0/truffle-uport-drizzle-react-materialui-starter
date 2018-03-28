import { uport } from './../../../util/connectors.js'
import { browserHistory } from 'react-router'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function loginUser() {
  return function(dispatch) {
    // UPort and its web3 instance are defined in ./../../../util/wrappers.
    // Request uPort persona of account passed via QR
    uport.requestCredentials({
        requested: ['name', 'phone', 'country'],
        notifications: true // We want this if we want to recieve credentials
      })
      .then((credentials) => {
        dispatch(userLoggedIn(credentials))

        //console.log(credentials)
        //localStorage.setItem('auth_token', JSON.stringify(credentials));
        
        // Used a manual redirect here as opposed to a wrapper.
        // This way, once logged in a user can still access the home page.
        var currentLocation = browserHistory.getCurrentLocation()

        if ('redirect' in currentLocation.query)
        {
          return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
        }

        return browserHistory.push('/dashboard')
    })
  }
}

/*
This should work, but not sure where to put it


const token = localStorage.getItem('auth_token');
if (token){
  console.log("token found in auth_token localStoage!!")
  const creds = JSON.parse(token)
  dispatch(userLoggedIn(creds))
}
else {
  console.log("no token in auth_token localStoage")
}
*/