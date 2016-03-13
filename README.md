# meteor-react-router-redux
scaffold test for Meteor + React + React-Router-Redux

## Why is this here?
I'm migrating some projects to a React front-end and would like to keep Meteor as the backend. I have read many awesome tutorials about how to migrate to React and I've decided on using react-router-redux. There are some minor discrepancies with import syntax that I would like to understand. They are outlined here in 'Open Questions'.

This is the basic example from /examples/basic in [reactjs/react-router-redux](https://github.com/reactjs/react-router-redux) in a [Meteor](https://www.meteor.com/) 1.3-beta.16 environment.

## Setup
1. Install [Meteor](https://www.meteor.com/install)
2. Install [Node.js](https://nodejs.org/en/) 
2. Clone repo and run in local environment

		git clone https://github.com/kandizzy/meteor-react-router-redux.git
		cd meteor-react-router-redux
		npm install
		meteor

## Open Questions
1. Why does this import syntax return reducers that are undefined? (See [line 16](https://github.com/kandizzy/meteor-react-router-redux/blob/master/client/main.jsx#L16) in main.jsx)

		import * as reducers from './reducers'

2. Why does this import syntax return components that are undefined? (See [line 23](https://github.com/kandizzy/meteor-react-router-redux/blob/master/client/main.jsx#L23) in main.jsx)

		import { App, Home, Foo, Bar } from './components'
