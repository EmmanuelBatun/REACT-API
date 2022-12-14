import React from "react";
import '../App'
import { Link } from "react-router-dom";



const Navbar = () => {

    return(
        <div className="navbar">
            <div><h1>Books App</h1></div>
            <div>
                <Link to="/favorites">
                <h3>You Favorites</h3>
                </Link>
            </div>
            <div>
                <Link to="/booklist">
                <h3>Home</h3>
                </Link>
            </div>
            <div>
            <Link to="/">
                <h3>Cerrar sesion</h3>
                </Link>
            </div>
            
        </div>
    )
    
}
export default Navbar