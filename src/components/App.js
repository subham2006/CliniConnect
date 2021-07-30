import React from 'react'
import { AuthProvider } from '../AuthContext';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard';
import Patient from './Patient'

function App() {
  return (

      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <Router>
            <AuthProvider>
              <Switch>
              <Route exact path = '/CliniConnect' component = {Login} />
              <Route path = '/CliniConnect/dashboard' component = {Dashboard} />
              <Route path = '/patient' component = {Patient} />
              </Switch>
            </AuthProvider>
          </Router>
      </Container>
  );
}

export default App;
