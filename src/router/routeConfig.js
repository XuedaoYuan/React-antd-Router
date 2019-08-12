import Test from '../pages/Test'
import Index from '../pages/Index'
import Edit from '../pages/Index/edit'
const routeConfig = [
	{
		path: '/app/home',
		breadcrumbName: 'Home',
		children: [
			{
				path: '/app/home/index',
				breadcrumbName: '首页',
				component: Index,
				children: [
					{
						path: '/app/home/index/edit',
						breadcrumbName: '编辑',
						component: Edit,
						hidden: true
					}
				]
			},
			{
				path: '/app/home/test',
				breadcrumbName: '测试',
				component: Test
			}
		]
	},
	{
		path: '/app/sub2',
		breadcrumbName: 'sub2',
		children: [
			{
				path: '/app/sub2/user',
				breadcrumbName: '用户'
			},
			{
				path: '/app/sub2/permission',
				breadcrumbName: '权限'
			}
		]
	}
]

export default routeConfig
