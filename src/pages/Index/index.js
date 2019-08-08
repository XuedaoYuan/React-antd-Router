import React, { Component } from 'react'
import { Button, Typography } from 'antd'
import { withRouter } from 'react-router-dom'
const { Title } = Typography
class Index extends Component {
	handleEdit = () => {
		this.props.history.push('/home/index/edit')
	}
	render() {
		return (
			<div>
				<Title>Index</Title>
				<Button type="primary" onClick={this.handleEdit}>
					编辑
				</Button>
			</div>
		)
	}
}

export default withRouter(Index)
