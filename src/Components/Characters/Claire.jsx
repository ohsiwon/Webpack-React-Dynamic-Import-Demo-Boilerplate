import React from 'react';
import Loadable from 'react-loadable';
import LoadingMessage from 'Components/Common/LoadingMessage';
import InventoryWindow from 'Components/Windows/InventoryWindow';
import Knife from 'Components/Weapons/Knife';
import Magnum from 'Components/Weapons/Magnum';

const Claire = () => {
  const name = 'Claire Redfield';

  return (
    <div>
      <h2>{name}</h2>
      <InventoryWindow>
        <Knife />
        <Magnum />
      </InventoryWindow>
    </div>
  );
};

export default Claire;
