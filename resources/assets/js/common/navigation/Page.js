/**
 * Created by Sumit-Yadav on 06-10-2017.
 */
import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Button,
    Container,
    Dropdown,
    Divider,
    Image,
    Menu,
    Responsive,
    Segment
} from 'semantic-ui-react';
import { Grid, Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import * as actions from '../../store/actions'

import TopNavBar from '../../components/TopNavBar'
import UserMenuItem from '../../navigation/UserMenuItem'
import NotificationsMenuItem from '../../navigation/NotificationsMenuItem'
import { TopConnect } from '../../navigation';


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        event.preventDefault();
        this.props.dispatch(actions.authLogout());
        // this.props.dispatch( actions.setPageTitle( 'test' ) );
    }

    render() {
    	const showLegacy = false;

    	console.log( 'Page', this.props );

        this.avatar = (
            <span>
                 <Image avatar src={require('../../../images/avatar/boy.png')}
                        verticalAlign='top'/> {this.props.userName}
            </span>
        );

        return (
        	<Grid fluid className='top-header'>

            	<Row>
            		<Col xs={12}>

						<nav className="navbar navbar-default">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a className="navbar-brand" href="/" style={{background: '#585AE9'}}>
									<img src={require('../../../images/clickon-logo.svg')} alt="CLICKON"/>
								</a>
							</div>

							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul className="nav navbar-nav">
									<li>
										<a href="/dashboard">Dashboard</a>
									</li>
								</ul>

                                {this.props.isAuthenticated
                                    ?
                                    <TopConnect />
                                    :
				            		<ul className="nav navbar-nav navbar-right">
										<li><a href="/login">Login</a></li>
										<li><a href="/register">Register</a></li>
									</ul>
                                }
							</div>
						</nav>
            		</Col>
            	</Row>
            </Grid>
        );
    }
}

Page.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default Page;