import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { userContext } from "../../context/usersContext.js";
const FormModel = ({isOpen,isClose}) =>{

    const {editUser,addUser} = useContext(userContext);


    const [formData,setFormData] = useState({
        'username':'',
        'password':'',
        'user_id':0,
    })

    

    return (
        <div className={`modal ${isOpen ? "": "hidden" }`} >
        <div className="modal-content">
            <input type="hidden" id="transaction_id" value="0"/>
            <div className="form flex flex-direction-column">
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="username">User Name</label>
                    <input 
                    value={formData.username}

                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            username:e.target.value
                        })
                    }}

                    type="text"/>
                </div>
                
                
                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <label for="description">password</label>

                    <input type="password"
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                password:e.target.value
                            })
                        }}
                    
                    />
                 </div>

                <div className=" flex flex-wrap-nowrap align-items-start  form-group">
                    <button onClick={ async ()=>{
                            const result = await  addUser(FormData)
                            isClose()

                            
                    
                    }} 
                    className="view" type="button">Submit</button>
                    <button onClick={isClose} id="close_form_model" className="view" type="button">Close</button>
                </div>
            </div>
        </div>
    </div>

    )
}


export default FormModel;