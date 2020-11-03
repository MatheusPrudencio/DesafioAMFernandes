import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExibeDados from './pages/ExibeDados';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ExibeDados} />
      </Switch>
    </BrowserRouter>
  );
}