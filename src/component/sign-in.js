import React, { Component } from 'react';
import { connect } from 'react-redux';


import FormInput from './form-input';
import Button from './button.js';


import { googleSignInStart, emailSignInStart } from '../redux/user/user.actions';

class SignIn extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart( email, password );  
  }
  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }
  render() {
    const { googleSignInStart } = this.props;
    return (
      <div>
        <h4>Already got an account</h4>
        <p>Sign in with email and password</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <FormInput 
              name="email" 
              type="email" 
              onChange={this.handleChange} 
              value={this.state.email} className="form-control"
              id="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <FormInput 
              name="password" 
              type="password" 
              value={this.state.password} 
              onChange={this.handleChange}
              className="form-control" 
              id="password"/>
          </div>
          <Button type="submit">Sign In</Button>
          <Button type="button" google onClick={ googleSignInStart }>Sign In With Google <i className="fab fa-google"></i></Button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>({
  googleSignInStart: () => dispatch( googleSignInStart() ),
  emailSignInStart: (email,password) => dispatch( emailSignInStart({ email, password }) )
});
export default connect( null, mapDispatchToProps )(SignIn);