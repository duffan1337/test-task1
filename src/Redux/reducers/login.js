
import axios from "axios";

const SET_USER_DATA = 'SET_USER_DATA'
const ERROR_LOGIN = 'ERROR_LOGIN'

let initialState = {
    id: null,
    isAuth: false,
    errorLogin:false,

}

const authReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth,
            }
    }
    switch (action.type) {
        case ERROR_LOGIN:
            return {
                ...state,
                errorLogin: action.payload.errorLogin,
            }
    }
    return state
}

export const setAuthUserData = (id, isAuth) => ({ type: SET_USER_DATA, payload: { id, isAuth } })
export const errorLogin = (errorLogin) => ({ type: ERROR_LOGIN, payload: { errorLogin }})

// export const getAuthUserData = () => async (dispatch) => {
//     //return(dispatch)=>{
//     let data = await authAPI.Me()
//     if (data.resultCode === 0) {
//         let { id, email, login } = data.data
//         dispatch(setAuthUserData(id, email, login, true));
//     }
// }


// export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

//     let response = await authAPI.login(email, password, rememberMe, captcha)
//     if (response.data.resultCode === 0) {
//         dispatch(getAuthUserData())
//     }
    
//     else {
//         if(response.data.resultCode===10)
//         {
//             dispatch(getCaptchaUrl());
//         }

//         let message = response.data.messages.length > 0 ? response.data.messages[0] : " some error"
//         dispatch(stopSubmit("login", { _error: message }))
//     }
// }
 


export const postLoginData=({email, password})=>(dispatch)=>{
    axios.post(`https://mysterious-reef-29460.herokuapp.com/api/v1/validate/`,{email, password},
    ).then(({data})=>{
        console.log("login",data.status)
        if(data.status==="ok")
        {
         dispatch(setAuthUserData(data.data.id, true))
        }
        else if(data.status="err")
        {
            dispatch(errorLogin(true))
        }
  });
}



export default authReducer;