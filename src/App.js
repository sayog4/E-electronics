import React, { lazy, Suspense } from 'react';
import { GlobalStyles } from './globalStyles';

import { connect } from 'react-redux';
import { Route , Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Header from './component/header';
import Footer from './component/footer';
import Spinner from './component/spinner';
import Spinn from './component/spin';
import ErrorBoundary from './component/errorBoundary';

import { fetchCollectionsStart } from './redux/shop/shop.actions';

import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user.actions';

import { selectIsCollectionsFetching, selectIsCollectionsLoading } from './redux/shop/shop-selectors';

const Homepage = lazy( () => import('./pages/homepage') );
const CollectionPage = lazy( () => import('./pages/collectionPage') );
const DetailsPage = lazy( () => import('./pages/detailsPage') );

const HomepageSpinner = Spinner( Homepage );
const CollectionSpinner = Spinner( CollectionPage );
const DetailsSpinner = Spinner( DetailsPage );

const SignInAndSignUp = lazy( () => import('./pages/sign-in-and-sign-up') );
const Checkout = lazy( () => import('./pages/checkout') );

class App extends React.Component {

  componentDidMount() {

    const { fetchCollectionsStart, checkUserSession } = this.props;     
    
    fetchCollectionsStart();
    checkUserSession();
  }

  render() {
    const { isCollectionsLoading, isCollectionsFetching, currentUser } = this.props;
    console.log( currentUser );
  return (
    <React.Fragment>
    <GlobalStyles />
    <ErrorBoundary>
      <Header />
      <Switch>
          <Suspense fallback={<Spinn/>}>
          <Route exact path="/" render={ () => <HomepageSpinner isLoading={ isCollectionsFetching } />} />  
            <Switch>  
              <Route exact path="/checkout" component={Checkout} /> 
              <Route exact path="/signin" render={ () => currentUser ? <Redirect to="/" /> : <SignInAndSignUp /> } />     
              <Route path={`/:collectionName/:product`}  render={ ( props ) => <DetailsSpinner isLoading={ !isCollectionsLoading }  { ...props } /> } />     
              <Route path ={`/:collectionId`} render={ ( props ) => <CollectionSpinner isLoading={ !isCollectionsLoading } { ...props } /> } /> 
            </Switch>
          </Suspense> 
      </Switch>
    </ErrorBoundary>
    <Footer />
    </React.Fragment>
  );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoading: selectIsCollectionsLoading
});
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch( fetchCollectionsStart() ),
  checkUserSession: () => dispatch( checkUserSession() )
});

export default connect( mapStateToProps, mapDispatchToProps )( App );
