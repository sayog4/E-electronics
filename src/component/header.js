import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from './cart-icon';
import CartDropdown from './cart-dropdown';

import { selectCartHidden } from '../redux/cart/cart-selectors';
import { selectCurrentUser } from '../redux/user/user-selector';

import { signOutStart } from '../redux/user/user.actions';

import styled from 'styled-components';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <Nav className="navbar navbar-expand-md navbar-light bg-primary fixed-top py-3 px-4">
      <Link to="/" className="navbar-brand order-1 order-md-0"><i className="fab fa-shopware mr-2"></i>E-Shop</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon order-0"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >  
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><Link to="/mobile" className="nav-link">Mobile</Link></li>
          <li className="nav-item"><Link to="/television" className="nav-link">Television</Link></li>
          <li className="nav-item"><Link to="/laptop" className="nav-link">Laptop</Link></li>
          <li className="nav-item"><Link to="/microwave_oven" className="nav-link">Microwave</Link></li>
          {
            currentUser ? 
              <li onClick={ signOutStart } className="nav-item nav-link">Sign Out</li> : 
              <li className="nav-item"><Link to="/signin" className="nav-link">Sign In</Link></li>
          }
        </ul>
      </div>
      <CartIcon />
      {
        !hidden ? <CartDropdown /> : null
      }      
    </Nav>
  );
}
const Nav = styled.nav`
  background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);

  .nav-item{
    font-size: 18px;
  }
`;

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch( signOutStart() )
})
export default connect( mapStateToProps, mapDispatchToProps )( Header );