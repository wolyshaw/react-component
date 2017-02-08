import React, {Component} from 'react'
import {render} from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const BannerBar = props => {
	let {limit, active, setActive} = props
	return (
		<div className="banner-bar">
			{
				Array.from({length: limit}).map((span, index) => (
					<span
						className={'bar-item' + (active === index ? ' bar-item-active' : '')}
						key={index}
						onClick={() => setActive(index)}
					>
					</span>
				))
			}
		</div>
	)
}

class Banner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: props.active || 0,
			limit: props.list.length
		}
	}
	changeBanner(setActive) {
		let active = this.state.active < this.state.limit - 1 ? this.state.active + 1 : 0
		this.setState({
			active: (setActive !== undefined ? setActive : active)
		})
	}
	render() {
		let {list, enterTime, leaveTime} = this.props
		return (
			<div className="banner">
				<ReactCSSTransitionGroup
					transitionName="banner-transition"
					transitionEnterTimeout={enterTime || 500}
					transitionLeaveTimeout={leaveTime || 300}
				>
					<img src={list[this.state.active].src} key={this.state.active} onClick={this.changeBanner.bind(this, undefined)} />
				</ReactCSSTransitionGroup>
				<BannerBar limit={this.state.limit} active={this.state.active} setActive={this.changeBanner.bind(this)}/>
			</div>
		)
	}
}

export default Banner
