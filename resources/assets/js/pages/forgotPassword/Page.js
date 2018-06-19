import React from 'react'
import {
    Dimmer,
    Form,
    Header,
    Loader,
    Message,
    Segment} from 'semantic-ui-react'
import { Grid, Col, Row, Button, Well } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Validator } from 'ree-validate'
import AuthService from '../../services'
import PageHeader from '../../common/pageHeader'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new Validator({
            email: 'required|email',
        });

        this.state = {
            credentials: {
                email: '',
            },
            responseError: {
                isError: false,
                code: '',
                text: ''
            },
            isSuccess: false,
            isLoading: false,
            errors: this.validator.errorBag
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        const {credentials} = this.state;
        credentials[name] = value;
        this.validator.validate(name, value)
            .then(() => {
                const {errorBag} = this.validator;
                this.setState({errors: errorBag, credentials})
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        const {credentials} = this.state;
        this.validator.validateAll(credentials)
            .then(success => {
                if (success) {
                    this.setState({
                        isLoading: true
                    });
                    this.submit(credentials);
                }
            });
    }

    submit(credentials) {
        this.props.dispatch(AuthService.resetPassword(credentials))
            .then((result)  => {
                this.setState({
                    isLoading: false
                });
                this.setState({
                    isSuccess: true,
                });
            })
            .catch(({error, statusCode}) => {
                const responseError = {
                    isError: true,
                    code: statusCode,
                    text: error
                };
                this.setState({responseError});
                this.setState({
                    isLoading: false
                });
            })
    }

    componentDidMount(){
        this.setState({
            isLoading: false
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { isAuthenticated } = this.props;

        if (isAuthenticated) {
            return (
                <Redirect to={from}/>
            )
        }
        const {errors} = this.state;

        return (
            <div>
                <PageHeader heading="login"/>
                <Segment className='page-loader' style={{display: this.state.isLoading ? 'block' : 'none'}}>
                    <Dimmer active inverted>
                        <Loader size='large'>Resetting Password...</Loader>
                    </Dimmer>
                </Segment>

                <Grid>
                	<Row>
	                    <Col xs={6} xsPush={3} className='login-form'>

	                        <div className="ui header" style={{fontSize: 26, color: 'teal', textAlign: 'center'}}>
	                            Reset your password
	                        </div>

	                        {this.state.responseError.isError && <div className={'alert alert-danger'}>
	                        	{this.state.responseError.text}
	                        </div>}

	                        {this.state.isSuccess && <div className={'alert alert-success'}>
								If the email you entered exists, a reset link has been sent !
	                        </div>}

	                        <Form size='large'>
	                            <Segment stacked>
	                                <Form.Input
	                                    fluid
	                                    icon='user'
	                                    iconPosition='left'
	                                    name='email'
	                                    placeholder='E-mail address'
	                                    onChange={this.handleChange}
	                                    error={errors.has('email')}
	                                />
	                                {errors.has('email') && <Header size='tiny' className='custom-error' color='red'>
	                                    {errors.first('email')}
	                                </Header>}
	                                <Button block bsStyle='teal' bsSize='large' onClick={this.handleSubmit}>
	                                	Reset Password
	                                </Button>
	                            </Segment>
	                        </Form>

	                        <Well bsSize="small" style={{ textAlign: 'center' }}>
	                            New to us? <Link to='/register' replace>Register</Link>
	                        </Well>
	                    </Col>
                	</Row>
                </Grid>
            </div>
        );
    }
}

Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Page;
