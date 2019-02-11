import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingMessage from '../Components/Common/LoadingMessage';
import style from './style.scss?module';

const Index = () => <h2>Choose the characters</h2>;

const Leon = Loadable({
  loader: () => import('../Components/Characters/Leon' /* webpackChunkName: "Leon" */),
  loading: LoadingMessage,
});

const Claire = Loadable({
  loader: () => import('../Components/Characters/Claire' /* webpackChunkName: "Claire" */),
  loading: LoadingMessage,
});

const Chris = Loadable({
  loader: () => import('../Components/Characters/Chris' /* webpackChunkName: "Chris" */),
  loading: LoadingMessage,
});

const AppRouter = () => (
  <Router>
    <div className={style.container}>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink
              className={style.navItem}
              activeClassName={style.navItemSelected}
              exact
              to="/"
            >
            Main
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.navItem}
              activeClassName={style.navItemSelected}
              to="/leon/"
            >
            Leon
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.navItem}
              activeClassName={style.navItemSelected}
              to="/claire/"
            >
            Claire
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.navItem}
              activeClassName={style.navItemSelected}
              to="/chris/"
            >
            Chris
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/leon/" component={Leon} />
        <Route path="/claire/" component={Claire} />
        <Route path="/chris/" component={Chris} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
