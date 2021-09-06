import { FunctionComponent } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
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
      </Switch>
      <Menu />
    </>
  );
};

export default Base;
