import {connect} from 'react-redux'
import Page from './Page'

const mapStateToProps = state => {
    return {
        isAuthenticated : state.Auth.isAuthenticated,
        userName : state.Auth.user.name,
    }
};

const mapDispatchToProps = dispatch => {
  return {
    logOutAuth : () => dispatch({
      type : 'AUTH_LOGOUT'
    })
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Page );