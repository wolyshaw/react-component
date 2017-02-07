import React from 'react'
import {render} from 'react-dom'

let thisForm

const uploadSubmit = (e, back) => {
	e.preventDefault()
	setTimeout(() => {
		thisForm.reset()
		back('提交成功之后返回的数据')
	}, 1000)
}

const Upload = props => {
	let {successEvent} = props
	return (
		<form onSubmit={e => uploadSubmit(e, successEvent)} ref={n => thisForm = n}>
			<label><span>上传文件：</span><input type="file"/></label>
			<input type="submit" value="submit"/>
		</form>
	)
}

export default Upload
