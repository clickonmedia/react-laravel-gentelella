
import {connect} from 'react-redux'
import Top from './Top'
import Left from './Left'
import Right from './Right'
import Footer from './Footer'

const mapStateToProps = state => {
    return {
        isAuthenticated : state.Auth.isAuthenticated,
        userName : state.Auth.user.name,
    }
};

const mapDispatchToProps = dispatch => {
  return {
    logOutAuth: () => dispatch({
      type : 'AUTH_LOGOUT'
    }),
    setPageTitle: () => dispatch({
      type : 'SET_PAGE_TITLE'
    })
  }
}

const TopConnect = connect(mapStateToProps, mapDispatchToProps)(Top)

export {
  TopConnect,
  Left,
  Right,
  Footer,
}
