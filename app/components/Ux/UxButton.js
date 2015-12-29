// LIBRARY
import cx from 'classnames';
import React from 'react';

// stateless functional component
const UxButton = ({label, onClick, show}) => (
  <button className={cx({'hidden': show})} onClick={onClick}>
      {label}
  </button>
);
UxButton.prototype.displayName = 'UxButton';

export default UxButton;