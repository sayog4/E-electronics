import { shopTypes } from './shop.types';



export const fetchCollectionsStart = collectionsMap => ({
  type: shopTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = err => ({
  type: shopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: err
});


