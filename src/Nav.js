import React from   'react';
import './App.css';
import {Link} from 'react-router-dom'; 



class Navbar extends React.Component{
    render(){
        return(
            <nav >

            <h1>ENGINNERING BLOG</h1>

            <ul className="link">
 
            <Link  to="/login" className="samna">
                <li>LogIn</li>
                </Link>
               
         
                
                
                <Link  to="/signup" className="samna">
                <li>Sign Up</li>
                </Link>
                <Link to="/" className="samna">
                <li>Blog</li>
                </Link>
            </ul>
            </nav>
        );
    }
}
export default Navbar;