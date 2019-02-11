import React from 'react';
import Loadable from 'react-loadable';
import LoadingMessage from '../Common/LoadingMessage';
import Knife from '../Weapons/Knife';
// import Handgun from '../Weapons/Handgun';
// import Magnum from '../Weapons/Magnum';

const Handgun = Loadable({
  loader: () => import('../Weapons/Handgun' /* webpackChunkName: 'Handgun' */),
  loading: LoadingMessage,
});

const Magnum = Loadable({
  loader: () => import('../Weapons/Magnum' /* webpackChunkName: 'Magnum' */),
  loading: LoadingMessage,
});

const Leon = () => {
  const name = 'Leon Scott Kennedy';

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li><Knife /></li>
        <li><Handgun /></li>
        <li><Magnum /></li>
      </ul>
    </div>
  );
};

export default Leon;
