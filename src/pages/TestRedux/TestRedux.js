import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addOne, addAsync } from '../../redux/actions/count_actions';
import { Button, Divider } from 'antd';

class TestRedux extends Component {
	render() {
		return (
			<div>
				<p>{this.props.count}</p>
				<p>
					<Button type="primary" onClick={this.props.handleAddOne}>
						add 1
					</Button>
					<Divider type="vertical" />
					<Button type="primary" onClick={this.props.hanleAddAsync}>
						add async
					</Button>
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		count: state.Count.count
	};
}

function mapDispathToProps(dispatch) {
	return {
		handleAddOne: () => dispatch(addOne),
		hanleAddAsync: () => dispatch(addAsync())
	};
}

// export default withRouter(TestRedux);
/* export default connect(
	mapStateToProps,
	mapDispathToProps
)(TestRedux); */

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		mapDispathToProps
	)
)(TestRedux);
