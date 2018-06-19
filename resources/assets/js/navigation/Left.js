import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Left extends Component {
  render() {
    return (
    	<div className="col-md-3 left_col">
	    	<div className="scroll-view">
	    		{ this.props.children }

		    	<div className="sidebar-footer hidden-small">
			    	<a data-toggle="tooltip" data-placement="top" title="Settings">
			    		<span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
			    	</a>
			    	<a data-toggle="tooltip" data-placement="top" title="FullScreen">
			    		<span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
			    	</a>
			    	<a data-toggle="tooltip" data-placement="top" title="Lock">
			    		<span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
			    	</a>
			    	<a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
			    		<span className="glyphicon glyphicon-off" aria-hidden="true"></span>
			    	</a>
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default Left
