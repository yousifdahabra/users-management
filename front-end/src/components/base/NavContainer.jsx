import React from "react";

const NavContainer = ()=>{
    return (
        <div className="nav-container">
        <nav className="flex flex-direction-column justify-content-space-between second-background-color nav">
        <div className="nav-options">
                <a   className="nav-option active" >
                    <i className="fa fa-tachometer" aria-hidden="true"></i>
                    <h3> Dashboard</h3>
                </a>

                <a className="nav-option" >
                    <i className="fa fa-tachometer" aria-hidden="true"></i>
                    <h3>Logout</h3>
                </a>

            </div>
        </nav>
    </div>
    );
};



export default NavContainer;






