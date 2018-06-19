import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './analytics/Dashboard'
import HomeMenu from './Menu'

export default <Route path="/dashboard/home/analytics" component={Dashboard} />
export { HomeMenu }
