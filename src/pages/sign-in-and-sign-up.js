import React from 'react';

import SignIn from '../component/sign-in';
import SignUp from '../component/sign-up';

const SignInAndSignUp = () => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <SignIn />
        </div> 
        <div className="col-12 col-sm-12 col-md-6">
          <SignUp />
        </div>      
      </div>    
    </div>
  );
}

export default SignInAndSignUp;