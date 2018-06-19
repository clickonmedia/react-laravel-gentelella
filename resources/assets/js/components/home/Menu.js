import React from 'react'
import { GroupMenuItem, MenuItem } from '../SideBar'

const Menu = (
  <GroupMenuItem title="Home" icon="home" to="/home">
    <MenuItem title="Analytics" to="/dashboard/home/analytics" />
  </GroupMenuItem>
)

export default Menu