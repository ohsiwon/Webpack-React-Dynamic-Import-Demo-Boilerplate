import React from 'react';
import Loadable from 'react-loadable';
import LoadingMessage from 'Components/Common/LoadingMessage';
import InventoryWindow from 'Components/Windows/InventoryWindow';
import Knife from 'Components/Weapons/Knife';
// import Handgun from 'Components/Weapons/Handgun';
// import Magnum from 'Components/Weapons/Magnum';

const Handgun = Loadable({
  loader: () => import('Components/Weapons/Handgun' /* webpackChunkName: 'Handgun' */),
  loading: LoadingMessage,
});

const Magnum = Loadable({
  loader: () => import('Components/Weapons/Magnum' /* webpackChunkName: 'Magnum' */),
  loading: LoadingMessage,
});

const Leon = () => {
  const name = 'Leon Scott Kennedy';

  return (
    <div>
      <h2>{name}</h2>
      <InventoryWindow>
        <Knife />
        <Handgun />
        <Magnum />
      </InventoryWindow>
    </div>
  );
};

export default Leon;
