import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
 
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import homepage from './components/pages/HomePage/Home';
import NotFound from './components/pages/NotFound/NotFound';
import ScrollIndicator from './components/ScrollToIndicator';

const App = () => {
  return (
    <>
   <Router>
  
      <ScrollToTop />
      
      <Navbar />
      <ScrollIndicator/>
      
      <Switch>
      <Route exact path="/" component={homepage} />
      <Route component={NotFound} />
      <Redirect to="/" />
      </Switch>

       <Footer />
    </Router>
    </>
  );
}

export default App;
