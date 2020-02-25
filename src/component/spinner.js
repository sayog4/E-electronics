import React from 'react';

import Spinn from './spin';

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return (
    isLoading ? (
      <Spinn />
    ) : <WrappedComponent { ...otherProps } />
  );
}
export default Spinner;