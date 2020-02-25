import styled from 'styled-components';
const ButtonCart = styled.button`

  padding: 10px 30px;
  margin-top: 5px;
  text-decoration: none;
  display: block;
  width: 100%;
  color: #111;
  font-size: 16px;
  position: relative;
  transition: all .5s;
  overflow: hidden;
  border: none;
  outline: none;
  box-shadow: 0 0 20px transparent;
  background-image:${({ checkout }) => checkout ?  'linear-gradient(to top, #4481eb 0%, #04befe 100%)' : 'linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)' };
  color: #fff;
  
  &:before,
  &:after{
    position: absolute;
    content: '';
  }
  &:after{
    border-top: 2px solid #111;    
    border-left: 2px solid #111;
    top: 0;
    width: 50%;
    height: 30px;
    left: 0;
    transition: all .5s;
  }
  &:before{
    border-bottom: 2px solid #111;    
    border-right: 2px solid #111;
    bottom: 0;
    width: 30px;
    height: 50%;
    right: 0;
    transition: all .5s;
  }
  &:hover:after{
    
    width: 100%;
    height: 100%;
  }
  &:hover:before{
    
    width: 100%;
    height: 100%;
  }


`;
export default ButtonCart;