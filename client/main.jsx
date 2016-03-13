import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

/*
* this import results in state.count as undefined
* in ./components/Home.js
*/
//import * as reducers from './reducers'
import count from './reducers/count'

/*
* this import syntax results in App, Home, Foo and Bar being
undefined
*/
//import { App, Home, Foo, Bar } from './components'

import App from './components/App'
import Home from './components/Home'
import Foo from './components/Foo'
import Bar from './components/Bar'


const reducer = combineReducers({
  /*
  * this syntax cannot be used (see line 13)
  */
  //...reducers,
  count,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

// Add the reducer to your store on the `routing` key
const store = createStore(
  reducer,
  DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)

Meteor.startup(function(){
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="foo" component={Foo}/>
            <Route path="bar" component={Bar}/>
          </Route>
        </Router>
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('mount')
  )

});