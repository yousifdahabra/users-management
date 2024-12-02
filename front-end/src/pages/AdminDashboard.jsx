import React, { useState } from "react";
import Header from "../components/base/Header";
import NavContainer from "../components/base/NavContainer";
import Boxes from "../components/base/Boxes";
import UserReportHeader from "../components/admin/UserReportHeader";
import ReportBody from "../components/admin/ReportBody";
import FormModel from "../components/admin/FormModel";

const AdminDashboard = () => {
    const [isOpenAdd, setisOpenAdd] = useState(false);
    const [editData, seteditData] = useState([]);
    const triggerAddForm = () => {
      setisOpenAdd((isOpenAdd) => !isOpenAdd);
    };
    
    const triggerCloseForm = () => {
      setisOpenAdd(false);
    };
  
  return (
    <>
      <Header />
      <div className="flex main-container">
        <NavContainer />
        <div className="main">
          <Boxes />
          <div className="report-container">
            <UserReportHeader />
            <ReportBody />
          </div>
        </div>
      </div>
      <FormModel isOpen={isOpenAdd} isClose={triggerCloseForm}  />

    </>
  );
};

export default AdminDashboard