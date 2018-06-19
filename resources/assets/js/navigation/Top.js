// Top Navigation
import React, { Component } from 'react'
import TopNavBar from '../components/TopNavBar'
import UserMenuItem from './UserMenuItem'
import NotificationsMenuItem from './NotificationsMenuItem'

class Top extends Component {

  render () {
    return (
		<TopNavBar>
			<NotificationsMenuItem />
			<UserMenuItem parent={ this.props } />
		</TopNavBar>
    )
  }
}

export default Top