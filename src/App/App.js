// @flow
import * as React from 'react'; 
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={Root}/>
    </Switch>
  </BrowserRouter>
);

const Root = () => (
  <Head>Hello World!</Head>
);

const Head = styled.h1`
  color: red;
`;

export default App;
