
import React from 'react';
import Layout from './Components/Layout'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Other from './Components/Other'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'

const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/other" exact component={Other} />
        </Switch>
      </Layout>
    </Router >

  );
}

export default App;
