import React, { Component } from 'react';
import { Typography } from 'antd';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
const { Title } = Typography;
class Edit extends Component {
	state = {
		id: ''
	};
	handleEdit() {
		console.log(111);
		console.log(this);
	}
	componentDidMount() {
		const search = queryString.parse(this.props.history.location.search);
		this.setState({
			id: search.id
		});
	}
	render() {
		return (
			<div>
				<Title onClick={this.handleEdit}>编辑</Title>
				<p>id: {this.state.id}</p>
			</div>
		);
	}
}

export default withRouter(Edit);
