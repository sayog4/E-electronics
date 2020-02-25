import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    
  body{
    background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
    margin-top: 75px;
  }
  .owl-carousel {
    position: relative;
  }
  .owl-carousel .owl-next,
  .owl-carousel .owl-prev {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 25px);
    color: #111;
    border: 1px solid #111 !important;
    text-align: center;
    background: #fff !important;
    outline: none;
  }
  .owl-carousel .owl-prev {
    left: -2%;
  }
  .owl-carousel .owl-next {
    right: -2%;
  }
`;
