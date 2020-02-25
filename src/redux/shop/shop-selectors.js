import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [ selectShop ],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [ selectCollections ],
  collections => collections ? Object.keys( collections ).map( key => collections[ key ] ) : []
);

export const selectCollection = collectionUrlParam => createSelector(
  [ selectCollections ],
  collections => collections ? collections[ collectionUrlParam ] : null
);


export const selectDetail = (collectionName, product ) => createSelector(
  [ selectCollections ],
  collections => collections[ collectionName ].items[`${product.toLowerCase().split(' ').join('')}`]
);

export const selectIsCollectionsFetching = createSelector(
  [ selectShop ],
  shop => shop.isFetching
);
export const selectIsCollectionsLoading = createSelector(
  [ selectShop ],
  shop => !!shop.collections
);