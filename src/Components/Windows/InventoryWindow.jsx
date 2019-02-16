import React from 'react';
import PropTypes from 'prop-types';
import style from './InventoryWindow.scss?module';

const InventoryWindow = (props) => {
  const {
    children,
    Shell,
  } = props;

  // console.log(children.length)

  return (
    <Shell className={style.container}>
      {children}
    </Shell>
  );
};

InventoryWindow.propTypes = {
  children: PropTypes.node.isRequired,
  Shell: PropTypes.node,
};

InventoryWindow.defaultProps = {
  Shell: 'div',
};

export default InventoryWindow;
