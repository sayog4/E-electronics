import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    
    console.log(error);
  }
  render() {
    
  const { history } = this.props;
    if (this.state.hasError) {
      return (
        <div className="container p-3">
          <ImgContainer>
            <ImageBackground />
          </ImgContainer>
          <div className="row justify-content-center">
            <h4 className="display-1 text-danger text-center">Oops!!! page not found</h4>
            <button onClick={() => history.goBack() } className="btn btn-primary align-self-center">Go To Previous Page</button>          
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}
const ImgContainer = styled.div`
  width: 100%;
  height: 35vh;

`;
const ImageBackground = styled.div`
  background-image: url('https://i.imgur.com/Q2BAOd2.png');
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export default withRouter(ErrorBoundary);