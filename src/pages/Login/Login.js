import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setUserinfo } from '../../redux/actions/user_actions';
import './Login.less';

class Login extends Component {
	handleSubmit = e => {
		e.preventDefault();
		const { handleSetUsername } = this.props;
		this.props.form.validateFields((err, valueMap) => {
			if (!err) {
				localStorage.setItem('username', valueMap.username);
				handleSetUsername(valueMap.username);
				this.props.history.replace('/app/home/index');
				console.log('Received valueMap of form: ', valueMap);
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<div id="xd_components-form-demo-normal-login">
				<Form onSubmit={this.handleSubmit} className="login-form">
					<Form.Item>
						{getFieldDecorator('username', {
							rules: [{ required: true, message: 'Please input your username!' }]
						})(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }]
						})(<Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true
						})(<Checkbox>Remember me</Checkbox>)}
						<a className="login-form-forgot" href="">
							Forgot password
						</a>
						<Button
							type="primary"
							onClick={this.handleSubmit}
							htmlType="submit"
							className="login-form-button"
						>
							Log in
						</Button>
						Or <a href="">register now!</a>
					</Form.Item>
				</Form>
			</div>
		);
	}
	handleLogin = () => {
		this.props.history.replace('/app/home/index');
	};
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);
function mapDispathToProps(dispatch) {
	return {
		handleSetUsername: username => dispatch(setUserinfo({ username }))
	};
}
export default compose(
	withRouter,
	connect(
		null,
		mapDispathToProps
	)
)(LoginForm);
