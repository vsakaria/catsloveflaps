import React from "react";
import CatList from "./components/CatList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Uploader from "./components/Uploader";

const App: React.FC = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <CatList />
        </Route>
        <Route path="/upload">
          <Uploader />
        </Route>
      </Switch>
    </Router>
  </>
);
export default App;
