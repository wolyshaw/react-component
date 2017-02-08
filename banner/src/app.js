import React from 'react'
import {render} from 'react-dom'
import Banner from './banner'

const testData = [
	{
		title: 'pic 1',
		src: '/public/images/1.jpg'
	},
	{
		title: 'pic 2',
		src: '/public/images/2.jpg'
	},
	{
		title: 'pic 3',
		src: '/public/images/3.jpg'
	},
	{
		title: 'pic 4',
		src: '/public/images/4.jpg'
	},
	{
		title: 'pic 5',
		src: '/public/images/5.jpg'
	}
]

const App = props => {
	return (
		<div className="banner-wrap">
			<Banner list={testData}/>
		</div>
	)
}

export default App
