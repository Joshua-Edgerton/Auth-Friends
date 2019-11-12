import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import { PrivateRoute } from "./components/PrivateRoute"
import Login from "./components/Login"
import FriendsList from "./components/FriendsList"

function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/login" component={Login} />
       <PrivateRoute path="/friendslist" component={FriendsList} />
       <Route component={Login} />
     </Switch>
    </div>
  );
}

export default App;
