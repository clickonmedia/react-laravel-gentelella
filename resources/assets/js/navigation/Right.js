import React, { Component } from 'react'

class Right extends Component {
  render() {
    return (
		<div className="col-md-9 right_col" role="main">
			{ this.props.children }
		</div>
    )
  }
}

export default Right
