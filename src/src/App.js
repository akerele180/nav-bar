import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Tosin from './components/pages/Tosin'
import SignUp from './components/pages/SignUp'
import Profile from './components/pages/Profile'
import LogOut from './components/pages/LogOut'

function App () {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/tosin' component={Tosin} />
        <Route path='/profile' component={Profile} />
        <Route path='/logout' component={LogOut} />
      </Switch>
    </Router>
  )
}

export default App