import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../redux/cart/cart.actions';
import { selectCartItemsCount } from '../redux/cart/cart-selectors';


const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (     
    <IconContainer className="navbar-brand order-2" onClick={ toggleCartHidden }>Cart
      <i className="fas fa-cart-plus ml-1"></i>
      <span className="count">{itemCount}</span>
    </IconContainer>
  );
}
const IconContainer = styled.div`
  color: rgba(0,0,0,.5) !important;
  position: relative;
  cursor: pointer;
  .count{
    position: absolute;
    top: -4px;
    left: 40%;
    background: rgba(255,255,255, .8);
    padding: 0px 3px;
    border-radius: 47%;
    font-size: 14px;
  }
  
`; 
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch( toggleCartHidden() )
});

export default connect( mapStateToProps, mapDispatchToProps )( CartIcon );