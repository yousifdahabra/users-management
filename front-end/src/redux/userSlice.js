import {createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name:'users',
    initialState:{
        list:[]
    },
    reducer:{
        loadUsers:(state,action)=>{
            const users = action.payload

            return {
                ...state,
                list:users,
            }
        },
        createUser:(state,action)=>{
            const create = action.payload
            return{
                ...state,
                list:[...state.list,create]
            }
        }
    }
})
export default userSlice