import React, { useState } from "react";
import Header from "../components/base/Header";
import NavContainer from "../components/base/NavContainer";
import Boxes from "../components/base/Boxes";
import UserReportHeader from "../components/admin/UserReportHeader";
import ReportBody from "../components/admin/ReportBody";
import FormModel from "../components/admin/FormModel";
import {useCheckNetwork} from '../hooks/useCheckNetwork.js'
const AdminDashboard = () => {
    const isOnline = useCheckNetwork()
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
    {<h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>}
      <Header />
      <div className="flex main-container">
        <NavContainer />
        <div className="main">
          <Boxes />
          <div className="report-container">
            <UserReportHeader triggerAdd={triggerAddForm} />
            <ReportBody />
          </div>
        </div>
      </div>
      <FormModel isOpen={isOpenAdd} isClose={triggerCloseForm}  />

    </>
  );
};

export default AdminDashboard