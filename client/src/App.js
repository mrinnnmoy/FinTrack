import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import Logout from './components/Logout';
// import Protectedroute from './ProtectedRoute';
// import { useEffect, useState } from 'react';

function App() {

  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Services} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;