import React from "react";
import "./App.css";
import Users from "./components/Users";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserForm from "./components/UserForm";
// import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/user/:id" component={UserForm} />
          <Route path="/user" component={UserForm} />

          {/* <Route path="/update/:id" component={UpdateUser} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
