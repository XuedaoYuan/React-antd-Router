import React, { Component } from 'react'
import { Icon, Typography, Row, Col } from 'antd'
const { Title, Text, Paragraph } = Typography
class Test extends Component {
	state = {
		str: 'this'
	}
	render() {
		return (
			<div>
				<div>
					<Icon type="home" />
					<hr />
					<Title level={3}>Title</Title>
					<Text>Hello ,world!</Text>
					<Paragraph editable={{ onChange: this.paragraphChange }}>{this.state.str}</Paragraph>
					<Row>
						<Col span={12}>col-12</Col>
						<Col span={12}>col-12</Col>
					</Row>
				</div>
			</div>
		)
	}
	paragraphChange = str => {
		this.setState({
			str
		})
	}
}

export default Test
