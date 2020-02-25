import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import ButtonCart from './button-cart';

import { addItem } from '../redux/cart/cart.actions';


const CollectionItem = ({urltitle, item, addItem, history }) => {
  const { img, company, price, title } = item;
  const lUrl = urltitle.toLowerCase();
  const newTitle = title.length > 23 ? title.split("").filter((item,i)   => i <= 20).join("") + '...' : title;
  return (
    <Cardcontainer className="card">
      <img src={img} onClick={
        () => history.push(`${lUrl}/${item.title}`)
      } alt="Product" className="card-img-top img-fluid"/>
      <hr className="my-1" />
      <div className="card-body p-1">
        <h6 className="card-title  m-1">{company.toUpperCase()}</h6>
        <p className=" m-0 card-text text-capitalize">{newTitle}</p>
        <p className="m-0 card-text">$&nbsp;{price}</p>
        <ButtonCart onClick={ () => addItem(item) } type="button">Add to cart</ButtonCart> 
        
      </div>
    </Cardcontainer>
  );
}
const Cardcontainer = styled.div`
  padding: 10px 20px; 
  background: #ddd;
  transition: all .3s;
  img{ 
    transition: all .3s;
    cursor: pointer;
    object-fit: contain;
  }
  &:hover{
    box-shadow: 0 3px 4px rgba(0,0,0,.5);
    transform: scale(1.09);
  }
  &:hover img{
    transform: scale(1.1);
  }
  img{
    height: 200px;
  }
`;


const mapDIspatchToProps = dispatch => ({
  addItem: item => dispatch( addItem( item ) )
})
export default withRouter(connect( null, mapDIspatchToProps )(CollectionItem));