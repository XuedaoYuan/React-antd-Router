import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { ConfigProvider } from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
// import 'antd/dist/antd.css'
import './index.less'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Login from './pages/Login'
moment.locale('zh-cn')

ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/app" component={App} />
				<Route path="/login" component={Login} />
				<Route render={() => <div>404 not matched</div>} />
			</Switch>
		</Router>
	</ConfigProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
