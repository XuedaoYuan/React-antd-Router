import React from 'react'
import './App.css'
import { Redirect, Switch, Route, Link, withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import Time from './components/Time'
import routeConfig from './router/routeConfig'

import Index from './pages/Index'
import Test from './pages/Test'
import Edit from './pages/Index/edit'
const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

const breadcrumbNameMap = {
	/* 	'/home': 'Home',
	'/home/index': '首页',
	'/home/index/edit': '编辑',
	'/home/test': '测试',
	'/sub2': 'Sub2',
	'/sub2/user': '用户',
	'/sub2/permission': '权限' */
}

// 扁平化路由设置
let flattenRoutes = []
function recurseArrayToFlatten(routes) {
	for (let i = 0, len = routes.length; i < len; i++) {
		const route = routes[i]
		flattenRoutes.push(route)
		breadcrumbNameMap[route.path] = route.breadcrumbName
		if (routes[i].children) {
			recurseArrayToFlatten(routes[i].children)
		}
	}
}
recurseArrayToFlatten(routeConfig)
console.log('flattenRoutes', flattenRoutes)

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		console.log(this.props)
		const { location } = this.props
		const pathSnippets = location.pathname.split('/').filter(i => i)
		console.log(pathSnippets)
		const extraBreadcrumbItems = pathSnippets.map((_, index) => {
			if (index === 0) {
				return null
			}
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
														<Link to={child.path}>{child.breadcrumbName}</Link>
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
								<Switch>
									{/* <Redirect from="/app" to="/app/home/index" /> */}
									<Route path="/app/home/test" component={Test} />
									<Route path="/app/home/index/edit" component={Edit} />
									<Route path="/app/home/index" component={Index} />
									<Route path="/app/sub2/user" render={() => <div>用户</div>} />
									<Route path="/app/sub2/permission" render={() => <div>权限</div>} />
									{/* {flattenRoutes.map(route => {
										if (route.component) {
											return (
												<Route key={route.path} path={route.path} component={route.component} />
											)
										} else {
											return (
												<Route
													key={route.path}
													path={route.path}
													render={() => <div>{route.breadcrumbName}</div>}
												/>
											)
										}
									})} */}
								</Switch>
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
