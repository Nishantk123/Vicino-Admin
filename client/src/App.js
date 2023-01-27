import React,{Suspense } from 'react';
import "./style/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard/Deshboard";


const LoginComponent = React.lazy(() => import("./views/Login"));
const RegisterComponent = React.lazy(() => import("./views/register/Register"));
const HomeComponent = React.lazy(() => import("./views/Home"));
const ForgetPasswordComponent = React.lazy(()=> import("./views/ForgetPassword"))
const DashboardComponent = React.lazy(()=> import("./views/Dashboard/Deshboard"))

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Route exact path="/login" component={LoginComponent } />
        <Route exact path="/forget_password" component={ForgetPasswordComponent} />

        <Route exact path= "/register" component={RegisterComponent} />
        <Route exact path= "/" component={Dashboard} />
        <Route   path = "/dashboard" component={Dashboard } />
      </Router>
      </Suspense>
  );
}

export default App;
