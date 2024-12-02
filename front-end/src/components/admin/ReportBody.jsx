
import React, { useEffect, useState } from "react";

const ReportBody = () =>{
    
    return (
        <div className="report-body">


        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Role</th>
                    <th>is active</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                        <td>username</td>
                        <td>role</td>
                         
                        <td>is_active</td>
                        <td>create_date</td>
                        <td>Action</td>
                </tr>
             </tbody>
    
        </table>
    </div>
    )
}

export default ReportBody;