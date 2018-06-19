import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import { Grid, Row, Col } from 'react-bootstrap'
import PageHeader from '../../common/pageHeader'
import Dashboard from '../../components/home/analytics/Dashboard'
import Blank from '../../components/home/blank'

// import registerServiceWorker from './registerServiceWorker';

import PricingTables from '../../components/extras/PricingTables'
import Typography from '../../components/extras/Typography'
import Glyphicons from '../../components/extras/Glyphicons'
import Icons from '../../components/extras/Icons'
import MediaGallery from '../../components/extras/MediaGallery'
import ExtrasMenu from '../../components/extras/ExtrasMenu'

import { XPanel, PageTitle } from '../../components';
import { GroupMenuItem, MenuItem } from '../../components/SideBar';
import FormButtonsFactory from '../../components/forms/FormButtons';
import GeneralFormFactory from '../../components/forms/GeneralForm';
import FormsMenuFactory from '../../components/forms/FormsMenu';

const FormButtons = FormButtonsFactory(React, Row, Col, XPanel, PageTitle);
const GeneralForm = GeneralFormFactory(React, Row, Col, XPanel, PageTitle);
const FormsMenu = FormsMenuFactory(React, GroupMenuItem, MenuItem);

import { Left, Right, TopConnect, Footer } from '../../navigation';
import { Menu } from '../../components/menu';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    	let section = '';
    	let page = '';
    	// let pageContent = <Blank section="section" page="page" />
    	let pageContent = <Dashboard/>

		console.log( 'dashboard', this.props );

		if ( this.props.match && this.props.match.params ) {

			section = this.props.match.params.section;
			page = this.props.match.params.page;

			console.log( 'section:', section );
			console.log( 'page:', page );

			if( section == 'home' ) {
				switch( page ) {
					case 'analytics':
						pageContent = <Dashboard/>
						break
					default:
						pageContent = <Dashboard/>
				}
			}

			if( section == 'forms' ) {
				switch( page ) {
					case 'general-form':
						pageContent = <GeneralForm/>
						break
				case 'form-buttons':
						pageContent = <FormButtons/>
						break
					default:
						pageContent = <Blank section={section} page={page} />
				}
			}

			if( section == 'extras' ) {
				switch( page ) {
					case 'icons':
						pageContent = <Icons/>
						break
					case 'glyphicons':
						pageContent = <Glyphicons/>
						break
					case 'pricing-tables':
						pageContent = <PricingTables/>
						break
					case 'typograpy':
						pageContent = <Typography/>
						break
					case 'media-gallery':
						pageContent = <MediaGallery/>
						break
					default:
						pageContent = <Blank section={section} page={page} />
				}
			}
		}

        return (
            <Grid fluid={true}>
            	<Row>
            		<Col xs={12} className="nav-md">
	            		<div className="container body">
		            		<div className="main_container">
			            		<Left>
			            			{ Menu }
			            		</Left>
			            		<Right>
			            			{ pageContent }
			            		</Right>
		            		</div>
	            		</div>
            		</Col>
            	</Row>
            </Grid>
        );
    }
}

export default Page;