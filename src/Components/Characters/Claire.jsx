import React from 'react';
import Loadable from 'react-loadable';
import LoadingMessage from '../Common/LoadingMessage';
import Knife from '../Weapons/Knife';
// import Magnum from '../Weapons/Magnum';

const Magnum = Loadable({
  loader: () => import('../Weapons/Magnum' /* webpackChunkName: 'Magnum' */),
  loading: LoadingMessage,
});

const Claire = () => {
  const name = 'Claire Redfield';

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li><Knife /></li>
        <li><Magnum /></li>
      </ul>
    </div>
  );
};

export default Claire;
