import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { selectCollection } from '../redux/shop/shop-selectors';
import CollectionItem from '../component/collection-item';

const CollectionPage = ({ collection: { title, items } }) => {
  
  return(
    <Wrapper>
      <h2 className="display-5">{ title }</h2>
      <div className="row">
        {
          Object.keys( items ).map( key => items[ key ] ).map( item => 
            <div  key={item.id}  className="mx-auto my-3 col-10 col-sm-6 col-md-4 col-lg-3 align-items-center">
              <CollectionItem urltitle={title} item={item} />      
            </div>
          )
        }
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 40px;
  @media only screen and (max-width:576px) {
    padding: 20px;
  }
`;

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection( ownProps.match.params.collectionId )( state )
})

export default connect( mapStateToProps )(CollectionPage);