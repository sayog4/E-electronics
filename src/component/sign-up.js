import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from './form-input';
import Button from './button';

import { signUpStart } from '../redux/user/user.actions';

class SignUp extends Component {
  constructor( props ){
    super( props );
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  handleSubmit = async e => {
    const { signUpStart } = this.props;
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if( password !== confirmPassword ){
      alert("passwords don't match");
      return;
    }
    signUpStart( { displayName, email, password } )    
  }
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <h4>If you don't have an account</h4>
        <p>Sign up with email and password</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Display Name</label>
            <FormInput 
              name="displayName" 
              type="text" 
              onChange={this.handleChange} 
              value={this.state.displayName} className="form-control"
              id="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <FormInput 
              name="email" 
              type="email" 
              onChange={this.handleChange} 
              value={this.state.email} className="form-control"
              id="Email"/>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <FormInput 
              name="confirmPassword" 
              type="password" 
              value={this.state.confirmPassword} 
              onChange={this.handleChange}
              className="form-control" 
              id="confirmPassword"/>
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userData => dispatch( signUpStart( userData ) )
});

export default connect( null, mapDispatchToProps )(SignUp);