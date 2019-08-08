import React from 'react'
import './App.css'
import { Redirect, Route, Link, withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import Time from './components/Time'
import routeConfig from './router/routeConfig'
const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

const breadcrumbNameMap = {
	'/home': 'Home',
	'/home/index': '首页',
	'/home/index/edit': '编辑',
	'/home/test': '测试',
	'/sub2': 'Sub2',
	'/sub2/user': '用户',
	'/sub2/permission': '权限'
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	itemRender = (route, params, routes, paths) => {
		debugger
		const last = routes.indexOf(route) === routes.length - 1
		return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
	}
	render() {
		console.log(this.props)
		const { location } = this.props
		const pathSnippets = location.pathname.split('/').filter(i => i)
		const extraBreadcrumbItems = pathSnippets.map((_, index) => {
			const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
			return (
				<Breadcrumb.Item key={url}>
					{index === pathSnippets.length - 1 ? (
						<span>{breadcrumbNameMap[url]}</span>
					) : (
						<Link to={url}>{breadcrumbNameMap[url]}</Link>
					)}
				</Breadcrumb.Item>
			)
		})
		return (
			<div className="App">
				<Layout>
					<Header className="header" style={{ padding: 0 }}>
						<div className="logo">logo</div>
						<Time />
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
													return null
												}
												return (
													<Menu.Item key={child.path}>
														<Link to={route.path + child.path}>{child.breadcrumbName}</Link>
													</Menu.Item>
												)
											})}
										</SubMenu>
									)
								})}
							</Menu>
						</Sider>
						<Layout style={{ padding: '0 24px 24px' }}>
							<Breadcrumb separator={<Icon type="right" />} style={{ margin: '16px 0' }}>
								{extraBreadcrumbItems}
							</Breadcrumb>
							<Content
								style={{
									background: '#fff',
									padding: 24,
									margin: 0,
									minHeight: 280
								}}
							>
								<Redirect from="/home" to="/home/index" />
								{routeConfig.map(route => {
									return (
										<Route exact path={route.path} key={route.path}>
											{route.children.map(subRoute => {
												return (
													<Route
														exact
														path={route.path + subRoute.path}
														key={route.path + subRoute.path}
														render={props => {
															if (subRoute.component) {
																return <subRoute.component {...props} />
															}
															return <div>{subRoute.breadcrumbName}</div>
														}}
													/>
												)
											})}
										</Route>
									)
								})}
								{/* 	<Route exact path="/index" name="index" breadcrumbName="首页" component={Index} />
								<Route exact path="/test" name="test" breadcrumbName="测试" component={Test} />
								<Route
									path="/sub2/user"
									name="user"
									breadcrumbName="用户"
									render={() => <div>用户</div>}
								/> */}
							</Content>
						</Layout>
					</Layout>
					<Footer style={{ background: '#ccc' }}>Footer</Footer>
				</Layout>
			</div>
		)
	}
}

export default withRouter(App)
