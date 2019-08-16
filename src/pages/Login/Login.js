import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.less';

class Login extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
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
							onClick={this.handleLogin}
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
export default withRouter(LoginForm);
