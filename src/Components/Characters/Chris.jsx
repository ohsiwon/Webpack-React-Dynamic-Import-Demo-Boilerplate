import React from 'react';
import Loadable from 'react-loadable';
import LoadingMessage from 'Components/Common/LoadingMessage';
import InventoryWindow from 'Components/Windows/InventoryWindow';
import Knife from 'Components/Weapons/Knife';
import Shotgun from 'Components/Weapons/Shotgun';

const Chris = () => {
  const name = 'Chris Redfield';

  return (
    <div>
      <h2>{name}</h2>
      <InventoryWindow>
        <Knife />
        <Shotgun />
      </InventoryWindow>
    </div>
  );
};

export default Chris;
