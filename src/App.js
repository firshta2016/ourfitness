import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";

import { ExerciseTable } from "./components/ExerciseTable";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { ForgotPassword } from "./components/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route path="/ExerciseTable" component={ExerciseTable} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
