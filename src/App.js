import React from 'react';
import './App.css';
import './index';
import Navbar from './Nav';

import Signup from './signup';

import Blog from './BLOG';
import Login from './login';
import { BrowserRouter as Router , Switch ,Route} from 'react-router-dom'; 


function App() {
  return (
    <div className="APP">
      <Router>
      <Navbar/>
      <Switch>
      
     <Route path="/signup" component ={Signup}/>
       
     
      
     < Route path="/" exact component ={Blog}/>
     < Route path="/login"  component ={Login}/>
     </Switch>
     </Router>
    

  
    </div>
  );
}

export default App;
