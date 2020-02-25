import React from 'react';
import { connect } from 'react-redux';

import ButtonCart from '../component/button-cart';

import { selectDetail } from '../redux/shop/shop-selectors';

function DetailsPage({ detail, history }) {

  const { title, img, company, price, info } = detail;
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-10 mx-auto text-center text-italic text-blue my-5">
          <h1>{ title }</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-4 text-capitalize">
          <img src={img} className="img-fluid" alt="Product" />
          <h3 className="mt-3">model: { title }</h3>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by: <span className="text-uppercase">{ company }</span></h4>
          <h4 className="text-blue"><strong>price : $ </strong>{ price }</h4>
        </div>
        <div className="col-10 mx-auto col-md-6 my-4 text-capitalize">
          
          <p className="text-capitalize font-weight-bold mt-4 mb-0">
            Product Details:
          </p>
          <ul className="list-group">
          {
             info.map( ( unitInfo, index ) => <li className="list-group-item" key={index}>{ unitInfo }</li> )
           }
          </ul> 
            <ButtonCart onClick={() => history.goBack()}>Go Back</ButtonCart>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ( state, ownProps ) => ({
  detail: selectDetail( ownProps.match.params.collectionName, ownProps.match.params.product )( state )
});

export default connect( mapStateToProps )(DetailsPage);