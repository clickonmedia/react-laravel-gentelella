import React from 'react'
import {
    Divider,
    Dimmer,
    Form,
    Grid,
    Header,
    Icon,
    Loader,
    Message,
    Segment} from 'semantic-ui-react'
import { Button, Clearfix } from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import { Validator } from 'ree-validate'
import AuthService from '../../services'
import PageHeader from '../../common/pageHeader'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new Validator({
            email: 'required|email',
            password: 'required|min:6'
        });

        this.state = {
            credentials: {
                email: '',
                password: ''
            },
            responseError: {
                isError: false,
                code: '',
                text: ''
            },
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
        this.props.dispatch(AuthService.login(credentials))
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

    onSocialClick( platform ) {
       window.location.assign( 'redirect/' + platform );
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
                <Segment className='page-loader' style={{display: this.state.isLoading ? 'block' : 'none'}}>
                    <Dimmer active inverted>
                        <Loader size='large'>Authenticating...</Loader>
                    </Dimmer>
                </Segment>

                <Grid
                    textAlign='center'
                    verticalAlign='middle'
                    className='login-form'
                >
                    <Grid.Column style={{maxWidth: '450px'}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Login to your account
                        </Header>
                        {this.state.responseError.isError && <Message negative>
                            <Message.Content>
                                {this.state.responseError.text}
                            </Message.Content>
                        </Message>}
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
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    name='password'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handleChange}
                                    error={errors.has('password')}
                                />
                                {errors.has('password') && <Header size='tiny' className='custom-error' color='red'>
                                    {errors.first('password')}
                                </Header>}

                                <Button color='teal' block bsSize='large' bsStyle="teal" onClick={this.handleSubmit}>Login</Button>
                                <Clearfix />

                                <Link to='/forgot-password' replace>Forgot your password?</Link>
								<div className="ui divider"></div>
								<div>Or login with:</div><br/>

                                <Button onClick={() => { this.onSocialClick('facebook') }} bsSize="large" className="ui circular facebook icon button">
                                	<i className="facebook icon"></i>
                                </Button>

                                <Button onClick={() => { this.onSocialClick('twitter') }} bsSize="large" className="ui circular twitter icon button">
                                	<i className="twitter icon"></i>
                                </Button>

                                <Button onClick={() => { this.onSocialClick('linkedin') }} bsSize="large" className="ui circular linkedin icon button">
                                	<i className="linkedin icon"></i>
                                </Button>

                                <Button onClick={() => { this.onSocialClick('google') }} bsSize="large" className="ui circular google plus icon button">
                                	<i className="google plus icon"></i>
                                </Button>

                            </Segment>
                        </Form>
                        <Message>
                            New to us? <Link to='/register' replace>Register</Link>
                        </Message>
                    </Grid.Column>
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
