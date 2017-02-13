import React from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'

const App = props => {
	return (
		<div>
			App
			<Link to="/c">to c</Link>
			{props.children}
		</div>
	)
}

export default App
