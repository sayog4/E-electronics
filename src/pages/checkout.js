import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cart-selectors';

import styled from 'styled-components';

import CheckoutItem from '../component/checkout-item';

const Checkout = ({ cartItems, total }) => {
  return (
    <CheckoutWrapper>
      <div className="checkout-header">
        <div className="header-content">
          <span>Product</span>
        </div>
        <div className="header-content">
          <span>Description</span>
        </div>
        <div className="header-content">
          <span>Quantity</span>
        </div>
        <div className="header-content">
          <span>Price</span>
        </div>
        <div className="header-content">
          <span>Remove</span>
        </div>        
      </div>
      {
        cartItems.map( cartItem => <CheckoutItem item={ cartItem} key={ cartItem.id} /> )
      }
      <div className="total">Total: $ { total }</div>
    </CheckoutWrapper>
  );
}
 
const CheckoutWrapper = styled.div`
  width: 75%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  text-align: center;
  @media only screen and (max-width: 800px) {
    width: 95%;
  }

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1.2px solid rgba(0,0,0,.4);
    @media only screen and (max-width: 650px) {
      display: none;
    }

    .header-content {
      text-transform: capitalize;
      width: 23%;
      font-size: 16px;
      &:last-child{
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

  .btn{
    width: 50%;
    align-self: flex-end;
  }
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect( mapStateToProps )(Checkout);