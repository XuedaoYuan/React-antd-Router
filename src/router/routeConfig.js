import Test from '../pages/Test'
import Index from '../pages/Index'
import Edit from '../pages/Index/edit'
const routeConfig = [
	{
		path: '/home',
		breadcrumbName: 'Home',
		children: [
			{
				path: '/index',
				breadcrumbName: '首页',
				component: Index
			},
			{
				path: '/index/edit',
				breadcrumbName: '编辑',
				component: Edit,
				hidden: true
			},
			{
				path: '/test',
				breadcrumbName: '测试',
				component: Test
			}
		]
	},
	{
		path: '/sub2',
		breadcrumbName: 'sub2',
		children: [
			{
				path: '/user',
				breadcrumbName: '用户'
			},
			{
				path: '/permission',
				breadcrumbName: '权限'
			}
		]
	}
]

export default routeConfig
