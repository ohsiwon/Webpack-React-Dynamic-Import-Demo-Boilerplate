import React from 'react';
import Loadable from 'react-loadable';
import LoadingMessage from '../Common/LoadingMessage';
import Knife from '../Weapons/Knife';
// import Shotgun from '../Weapons/Shotgun';

const Shotgun = Loadable({
  loader: () => import('../Weapons/Shotgun' /* webpackChunkName: 'Shotgun' */),
  loading: LoadingMessage,
});

const Chris = () => {
  const name = 'Chris Redfield';

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li><Knife /></li>
        <li><Shotgun /></li>
      </ul>
    </div>
  );
};

export default Chris;
