import React from 'react';
import Loadable from 'react-loadable';
import LoadingMessage from 'Components/Common/LoadingMessage';
import InventoryWindow from 'Components/Windows/InventoryWindow';
import Knife from 'Components/Weapons/Knife';
import Handgun from 'Components/Weapons/Handgun';

const Leon = () => {
  const name = 'Leon Scott Kennedy';

  return (
    <div>
      <h2>{name}</h2>
      <InventoryWindow>
        <Knife />
        <Handgun />
      </InventoryWindow>
    </div>
  );
};

export default Leon;
