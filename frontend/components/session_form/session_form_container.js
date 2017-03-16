import { connect } from 'react-redux';
import SessionForm from './session_form';
import {login, logout, signup, receiveErrors} from '../../actions/session_actions';

const mapStateToProps = ({session}, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: errors => dispatch(receiveErrors(errors)),
    formType
  };
}; 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);