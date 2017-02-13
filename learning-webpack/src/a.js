import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import App from './b'

const getC = (location, callback) => {
	 require.ensure([], require => {
		 callback(null, require('./c'))
	 }, 'c')
}

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="/c" getComponent={getC}/>
		</Route>
	</Router>,
	document.getElementById('app')
)
