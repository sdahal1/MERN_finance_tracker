import React from 'react';

const NavBar = () => {
    return (
        <div className='nav-bar'>
           
            <img className='nav-left' id="logo" src={require("../assets/logo1.png")} alt="finnaTrak logo" />
            <ul className="nav-right">
                {/* <li>Home</li> */}
                <li><a href="">Login</a></li>
                <li><a href="">Register</a></li>
                {/* <li>Signout</li> */}
            </ul>
        </div>
    );
};

export default NavBar;