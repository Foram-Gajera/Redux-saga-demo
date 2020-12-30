import React from "react";
import "./App.css";
import Users from "./components/Users";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/add" component={AddUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
