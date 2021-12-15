import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import NotePage from "./components/NotePage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/notes">
          <NotePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
