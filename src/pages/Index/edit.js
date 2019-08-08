import React, { Component } from 'react'
import { Typography } from 'antd'
import { withRouter } from 'react-router-dom'
const { Title } = Typography
class Edit extends Component {
	handleEdit = () => {}
	render() {
		return (
			<div>
				<Title>编辑</Title>
			</div>
		)
	}
}

export default withRouter(Edit)
