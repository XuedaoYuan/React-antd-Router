import React from 'react';
import './App.css';
import { Redirect, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Time from './components/Time';
import routeConfig from './router/routeConfig';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setUserinfo } from './redux/actions/user_actions';
import Index from './pages/Index';
import Test from './pages/Test';
import Edit from './pages/Index/edit';
import TestRedux from './pages/TestRedux';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const breadcrumbNameMap = {
	/* 	'/home': 'Home',
	'/home/index': '首页',
	'/home/index/edit': '编辑',
	'/home/test': '测试',
	'/sub2': 'Sub2',
	'/sub2/user': '用户',
	'/sub2/permission': '权限' */
};

// 扁平化路由设置
let flattenRoutes = [];
function recurseArrayToFlatten(routes) {
	for (let i = 0, len = routes.length; i < len; i++) {
		const route = routes[i];
		flattenRoutes.push(route);
		breadcrumbNameMap[route.path] = route.breadcrumbName;
		if (routes[i].children) {
			recurseArrayToFlatten(routes[i].children);
		}
	}
}
recurseArrayToFlatten(routeConfig);
console.log('flattenRoutes', flattenRoutes);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		const username = localStorage.getItem('username');
		if (username) {
			this.props.handleSetUsername(username);
		}
	}
	render() {
		console.log(this.props);
		const { location } = this.props;
		const pathSnippets = location.pathname.split('/').filter(i => i);
		console.log(pathSnippets);
		const extraBreadcrumbItems = pathSnippets.map((_, index) => {
			if (index === 0) {
				return null;
			}
			const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
			return (
				<Breadcrumb.Item key={url}>
					{index === pathSnippets.length - 1 ? (
						<span>{breadcrumbNameMap[url]}</span>
					) : (
						<Link to={url}>{breadcrumbNameMap[url]}</Link>
					)}
				</Breadcrumb.Item>
			);
		});
		return (
			<div className="App">
				<Layout className="middle__container">
					<Header className="header" style={{ padding: 0 }}>
						<div className="logo">logo</div>
						<Time className="xd-time-class" />
						<div className="username__container">用户：{this.props.username}</div>
					</Header>
					<Layout>
						<Sider width={200} style={{ background: '#fff' }}>
							<Menu
								mode="inline"
								defaultSelectedKeys={['/index']}
								defaultOpenKeys={['/home']}
								style={{ height: '100%', borderRight: 0 }}
							>
								{routeConfig.map(route => {
									return (
										<SubMenu
											key={route.path}
											title={
												<span>
													<Icon type="user" />
													{route.breadcrumbName}
												</span>
											}
										>
											{route.children.map(child => {
												if (child.hidden) {
													return null;
												}
												return (
													<Menu.Item key={child.path}>
														<Link to={child.path}>{child.breadcrumbName}</Link>
													</Menu.Item>
												);
											})}
										</SubMenu>
									);
								})}
							</Menu>
						</Sider>
						<Layout style={{ padding: '0 24px 24px' }}>
							<Breadcrumb separator={<Icon type="right" />} style={{ margin: '16px 0' }}>
								{extraBreadcrumbItems}
							</Breadcrumb>
							<Content className="main-content__container">
								<Switch>
									<Route path="/app/home/test" component={Test} />
									<Route path="/app/home/index/edit" component={Edit} />
									<Route path="/app/home/index" component={Index} />
									<Route path="/app/home/redux-test" component={TestRedux} />
									<Route path="/app/sub2/user" render={() => <div>用户</div>} />
									<Route path="/app/sub2/permission" render={() => <div>权限</div>} />
								</Switch>
							</Content>
						</Layout>
					</Layout>
					<Footer style={{ background: '#ccc' }}>Footer</Footer>
				</Layout>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		username: state.User.username
	};
}

function mapDispathToProps(dispatch) {
	return {
		handleSetUsername: username => dispatch(setUserinfo({ username }))
	};
}

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		mapDispathToProps
	)
)(App);
