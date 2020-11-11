import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import NotFound from './components/pages/NotFound/NotFound';
import ScrollIndicator from './components/ScrollToIndicator';

function App() {
  return (
    <>
   
   
    <Router>
  
      <ScrollToTop />
      
      <Navbar />
      <ScrollIndicator/>
      
      <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
      </Switch>

       <Footer />
    </Router>
    </>
  );
}

export default App;
