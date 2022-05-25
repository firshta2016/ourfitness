import React, { useReducer, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { ExerciseTable } from "./components/ExerciseTable";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Dashboard } from "./components/Dashboard";
import { Rules } from "./components/Rules";
import { AuthProvider } from "./contexts/AuthContext";
import { ForgotPassword } from "./components/ForgotPassword";
import { Footer } from "./components/Footer";
// import { Tablestyle } from "./components/Tablestyle";
import { Table } from "./components/Table";
import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ExerciseTable" component={ExerciseTable} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/rules" component={Rules} />
      {/* <Route path="/tablestyle" component={Tablestyle} /> */}
      <Route path="/table" component={Table} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <AuthProvider>
          <BrowserRouter>
            <Nav />
            <Routing />
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </UserContext.Provider>
    </>
  );
};

export default App;
