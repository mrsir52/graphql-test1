import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import FeedPage from './components/FeedPage'
import DraftsPage from './components/DraftsPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Home from "./pages/Home"
import Player from "./pages/Player"
import Lifts from "./pages/Lifts"

import 'tachyons'
import './index.css'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/players" component={Player} />
            <Route path="/lifts" component={Lifts} />
            <Route path="/post/:id" component={DetailPage} />
          </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
