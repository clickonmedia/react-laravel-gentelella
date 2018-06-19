import React, { Component } from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'
import { XPanel, PageTitle } from '../../components'

class Blank extends Component {

  constructor (props) {

  	console.log( 'blank constructor', props );

    super(props)
    this.state = {
      panelVisible: true,
      section: props.section
    }
  }

  render () {
    const { panelVisible } = this.state
    const onHide = e => this.setState({panelVisible: !panelVisible})

    console.log( 'blank', this.props );

    return (
      <div>
        <PageTitle title="No result" />
        <Clearfix />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Content>
                <Content />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
    )
  }
}

function Content () {
  return (
    <Col md={4} lg={4} sm={5}>
      <p>No result for path <i>/path/to/route</i></p>
    </Col>
  )
}

function LabelsAndBadges () {
  return (
    <Col md={12}>
      <h4>Labels and badges</h4>
      <span className="label label-default">Default</span>
      <span className="label label-primary">Primary</span>
      <span className="label label-success">Success</span>
      <span className="label label-info">Info</span>
      <span className="label label-warning">Warning</span>
      <span className="label label-danger">Danger</span>
      <span className="badge bg-green">42</span>
    </Col>
  )
}

export default Blank
