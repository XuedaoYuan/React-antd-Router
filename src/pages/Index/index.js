import React, { Component } from 'react';
import { Button, Typography, Table } from 'antd';
import { withRouter } from 'react-router-dom';
const { Title } = Typography;
const { Column } = Table;

class Index extends Component {
	state = {
		dataSource: [
			{
				key: '1',
				name: '小米',
				age: 32,
				address: '西湖区湖底公园1号'
			},
			{
				key: '2',
				name: '小红',
				age: 42,
				address: '西湖区湖底公园1号'
			}
		]
	};
	handleEdit = (record, e) => {
		console.log(record);
		this.props.history.push({
			pathname: '/app/home/index/edit',
			search: '?id=' + record.key
		});
	};
	render() {
		return (
			<div>
				<Title>Index</Title>
				<Table bordered pagination={false} dataSource={this.state.dataSource}>
					<Column title="名字" dataIndex="name" key="name" />
					<Column title="年龄" dataIndex="age" key="age" />
					<Column title="地址" dataIndex="address" key="address" />
					<Column
						title="操作"
						key="action"
						render={(text, record) => {
							return (
								<Button type="primary" onClick={e => this.handleEdit(record, e)}>
									编辑
								</Button>
							);
						}}
					/>
				</Table>
			</div>
		);
	}
}

export default withRouter(Index);
