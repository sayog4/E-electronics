import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from './collection-preview';

import { selectCollectionsForPreview } from '../redux/shop/shop-selectors';

const CollectionOverview = ({ collections }) => {
  return (
    <React.Fragment>
      {
        collections.map( ({id, ...otherProps }) => (
          <CollectionPreview key={id} noOfItemsToDisplay='6' {...otherProps} />
        ))
      }
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect( mapStateToProps )(CollectionOverview);