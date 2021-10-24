import { BrowserRouter, Switch, Route } from "react-router-dom";
import Edit from "./Components/Edit/Edit";
import EmptyEdit from "./Components/EmptyEdit/EmptyEdit";
import EmptyUpdate from "./Components/EmptyUpdate/EmptyUpdate";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

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
        <Route path="/edit">
          <EmptyEdit></EmptyEdit>
        </Route>
        <Route path="/contacts/edit/:id">
          <Edit></Edit>
        </Route>
        <Route path="/update">
          <EmptyUpdate></EmptyUpdate>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
