import { createContext } from "react";
import { requestAPI } from "../utlis/request";
export const userContext = createContext();

const UserProvider = ({children})=>{

    const addUser =   (data) =>{
        const result =   requestAPI({
            route:"users/addInstructor",
            method:"POST",
            body:data,
        })
    }
    const editUser =   (data) =>{
        const result =   requestAPI({
            route:"users/addInstructor",
            method:"POST",
            body:data,
        })
    }

    return (
        <userContext.Provider
        value={{
            addUser,
            editUser,
        }}
        >

            {children}

        </userContext.Provider>
    )

}


export default UserProvider;
