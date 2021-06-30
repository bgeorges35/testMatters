import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import CatCards from "./Components/CatCards";
import CatDescription from "./Components/CatDescription";

const App = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/">
          <CatCards />
        </Route>
        <Route exact path="/:cat">
          <CatDescription />
        </Route>
      </Switch>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
