import React from 'react';
import { Route, Switch } from 'react-router-dom';

import New from './New';
import Destroy from './Destroy';
import Index from './index'
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/new" component={New}/>
      <Route exact path="/destroy/:id" component={Destroy}/>
    </Switch>
  );
}
 
export default Routes;