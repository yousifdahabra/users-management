import React from "react";
import Header from "../components/base/Header";
import NavContainer from "../components/base/NavContainer";


const AdminDashboard = () =>{

    return (
        <>
        <Header/>
        <div className="flex main-container">
            <NavContainer/>
         <div className="main">
           <div className="report-container">
 
           </div>
        </div>
      </div>

        </>
    );

}

export default AdminDashboard