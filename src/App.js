import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Update from "./Components/Update/Update";

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/main">
          <Main></Main>
        </Route>
        <Route path="/update">
          <Update></Update>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
