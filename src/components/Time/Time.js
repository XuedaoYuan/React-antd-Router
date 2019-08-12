import React, { Component } from 'react'
import './Time.css'
class Time extends Component {
	state = { time: new Date() }
	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				time: new Date()
			})
		}, 1000)
	}
	componentWillUnmount() {
		if (this && this.timer) {
			clearInterval(this.timer)
		}
	}
	render() {
		const { time } = this.state
		return <div className="xd-time">{time.toLocaleTimeString()}</div>
	}
}

export default Time
