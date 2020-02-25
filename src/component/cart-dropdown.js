import React from 'react';
import { connect } from 'react-redux';
import ButtonCart from './button-cart';
import CartItem from './cart-item';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../redux/cart/cart-selectors';

import { toggleCartHidden } from '../redux/cart/cart.actions';

import styled from 'styled-components';

import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <DropdownContainer>
      <div className="cart-items">
        {
          cartItems.length ? 
          cartItems.map( cartItem => <CartItem item={cartItem} key={cartItem.id} />) :
          <span className="message">Add Items In Cart</span>
        }
      </div>
      <ButtonCart checkout onClick={ () => {
        history.push('/checkout');
        dispatch( toggleCartHidden() ); 
      }}> CHECKOUT </ButtonCart>
    </DropdownContainer>
  );
}
const DropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  right: 5px;
  top: 115%;
  z-index: 10;
  box-shadow: 0 3px 4px rgba(0,0,0,.4);

  animation: fadein .3s ease-in;


@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

  &:after {
    bottom: 100%;
    left: 82%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #96e6a1;
    border-width: 8px;
    margin-left: -8px;
  }

  .cart-items{
    height: 320px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    animation: fadein .5s ease-in;
  }
  button{
    justify-self: flex-end;
    align-self: center;
  }
  .message{
    font-size: 18px;
    margin: 100px auto;
  }
`;
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter( connect( mapStateToProps )(CartDropdown) );