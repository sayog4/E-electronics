import React from 'react';
import styled from 'styled-components';

const Spinn = () => {
  return (
      <SpinWrapper >
        <Spin>Loading...</Spin>
      </SpinWrapper>
  );
}
const SpinWrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Spin = styled.div`
  color: coral;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 20px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;background: #ffffff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
&:before,
&:after {
  background: #ffffff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}

&:before,
&:after {
  position: absolute;
  top: 0;
  content: '';
}
&:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
&:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

`;
export default Spinn;