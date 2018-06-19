import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item } from '../components/TopNavBar'

class UserMenuItem extends Component {

	constructor(props) {
		super(props)
		this.menuLogOut = this.menuLogOut.bind(this)
	}

	menuLogOut(e) {
		e.preventDefault();
		console.log( 'menuLogOut', this.props.parent );
		this.props.parent.logOutAuth();
		// this.props.parent.setPageTitle();
	}

	render() {
		console.log( 'UserMenuItem', this.props.parent );

		return (
			<Item {...this.props}>
				<Item.Content className="user-profile">
					<img src="images/img.jpg" alt=""/>{ this.props.parent.userName }
					<span className=" fa fa-angle-down"></span>
				</Item.Content>
				<Item.SubMenu className="dropdown-usermenu pull-right">
					<li><a href="#!"> Profile</a></li>
					<li>
						<a href="#!">
							<span className="badge bg-red pull-right">50%</span>
							<span>Settings</span>
						</a>
					</li>
					<li><a href="#!">Help</a></li>
					<li><a href="#" onClick={ this.menuLogOut }><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
				</Item.SubMenu>
			</Item>
		)
	}
}

export default UserMenuItem
