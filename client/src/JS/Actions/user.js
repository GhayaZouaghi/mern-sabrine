


import axios from 'axios'
import { LOGOUT, USER_FAIL, USER_LOAD, USER_SUCC, CURRENT_USER} from "../ActionsType/user"

// actions for register
export const register=(newUser, history)=>async(dispatch)=>{
   
   dispatch({type:USER_LOAD})
    try {
       let result= await axios.post ('/api/user/register', newUser) 
       dispatch({type:USER_SUCC, payload: result.data}) // {msg, user, token}
       history.push('/profile')
    } catch (error) {
        const errors = error.response.data.errors
        errors.map(error =>error= alert(errors.msg))
        dispatch({type:USER_FAIL, payload:error.response.data})
    }
}

// actions for login
export const login=(user,history)=>async(dispatch)=>{
   
    dispatch({type:USER_LOAD})
     try {
        let result= await axios.post ('/api/user/login', user) 
        dispatch({type:USER_SUCC, payload: result.data}) // {msg, user, token}
        history.push('/profile')
     } catch (error) {
         dispatch({type:USER_FAIL, payload:error.response.data})
     }
 }

//  logout
export const logout=()=>{
   return {
       type:LOGOUT,
       
       }
          }


        //   CURRENT USER

        export const currentUser=()=>async(dispatch)=>{
            
            dispatch({type:USER_LOAD})
            try {
                const config={
                    headers:{
                        authorization: localStorage.getItem("token")
                    }
                }
               let result= await axios.get ('/api/user/current', config) 
               dispatch({type:CURRENT_USER, payload: result.data}) // {msg, user, token}
                } catch (error) {
                dispatch({type:USER_FAIL, payload:error.response.data})
            }
          
        }
