import React from 'react'
import {render} from 'react-dom'
import Upload from './upload'

const successEvent = r => {
	console.log(r)
}

const App = props => {
	return (
		<div>
			<Upload successEvent={successEvent}/>
		</div>
	)
}

export default App
