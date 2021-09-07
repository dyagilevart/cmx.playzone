import { FunctionComponent } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Game from '../Game/Game';
import Menu from '../../components/Menu/Menu';
import Awards from '../Awards/Awards';
import Bookmarks from '../Bookmarks/Bookmarks';
import Main from '../Main/Main';

const Base: FunctionComponent = () => {

  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route  exact path={path}>
          <Main />
        </Route>
        <Route path={`${path}/award`}>
          <Awards />
        </Route>
        <Route path={`${path}/bookmark`}>
          <Bookmarks />
        </Route>
        <Route path={`${path}/:id`} children={<Game />} />
      </Switch>
      <Menu />
    </>
  );
};

export default Base;
