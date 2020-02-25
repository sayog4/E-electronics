import React from 'react';

import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../redux/cart/cart.actions';

import styled from 'styled-components';

const CheckoutItem = ({ item, clearItemFromCart, addItem, removeItem }) => {
  const { img, title, price, quantity } = item;
  return (
    <ItemWrapper>
      <div className="image-container">
        <img src={img} className="img-fluid" alt="Product" />
      </div>
      <p className="title">{title}</p>
      <p className="quantity">
        <span onClick={ () => removeItem( item ) }>
          <i className="fas fa-minus"></i>
        </span>
        {quantity}
        <span onClick={ () => addItem( item ) }>
          <i className="fas fa-plus"></i>
        </span>
      </p>
      <p className="price">$ {price}</p>
      <p className="remove-button" onClick={ () => clearItemFromCart( item ) }><i className="far fa-trash-alt"></i></p>
    </ItemWrapper>
  );
}
const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  text-align: center;
  line-height: 1;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }

  .image-container {
    width: 23%;
    padding-right: 15px; 
    @media only screen and (max-width: 650px) {
      width: 30%;
    }
   
  }
  .title,
  .quantity,
  .price {
    width: 23%;
    @media only screen and (max-width: 650px) {
      width: 40%;
    }
   
  }

  .quantity {
    padding-left: 20px;

    span{
      cursor: pointer;
      padding: 0 10px;
    }
  }
  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }

`;
const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart( item )),
  addItem: item => dispatch( addItem( item ) ),
  removeItem: item => dispatch( removeItem( item ) )
})

export default connect( null, mapDispatchToProps )(CheckoutItem);