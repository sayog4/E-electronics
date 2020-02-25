import React from 'react';

import styled from 'styled-components';

const CartItem = ({ item }) => {
  const { img, price, title, quantity } = item;
  return (
    <CartItemWrapper>
      <img src={img} alt="Product" className="image-fluid" />
      <div className="details">
        <span className="title">{title}</span>
        <span className="name">{quantity} <i className="fas fa-times my-1"></i> $ {price}</span>
      </div>
    </CartItemWrapper>
  );
}
const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 35%;
  }

  .details {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;

    .name {
      font-size: 16px;
    }
  }

`;

export default CartItem;