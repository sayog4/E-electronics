import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCD_uylnBHO9i2pbH_iv0a9vqGEifEjTKE",
  authDomain: "e-electronics-6f82d.firebaseapp.com",
  databaseURL: "https://e-electronics-6f82d.firebaseio.com",
  projectId: "e-electronics-6f82d",
  storageBucket: "e-electronics-6f82d.appspot.com",
  messagingSenderId: "483417378500",
  appId: "1:483417378500:web:c19f0d30579e152c540391",
  measurementId: "G-44DN1ZQNFV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup( googleProvider );

export default firebase;

export const getCurrentUser = () => {
  return new Promise(( resolve, reject )  =>{
    const unsubscribe = auth.onAuthStateChanged( userAuth => {
      resolve( userAuth );
    }, reject );
  })
}

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if( !userAuth ) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();  

  if( !snapShot.exists ){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch( err ){
      console.log( 'error creating user', err.message );
    }
  }
  return userRef;
}

export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
  const collectionRef = firestore.collection( collectionKey );

  const batch = firestore.batch();
  objectsToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc();
    batch.set( newDocRef, obj );
  });

  return await batch.commit()
};

export const convertCollectionSnapshotToMap = ( collections ) => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items } = doc.data();
    
    return{
      id: doc.id,
      title,
      items
    }
  } );
  return transformedCollection.reduce( ( acc, collection ) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  },{})
}
