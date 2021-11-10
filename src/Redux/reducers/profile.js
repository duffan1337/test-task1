
import axios from "axios";

const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const ERROR_USER = 'ERROR_USER'

let initialState = {
    city: null,
    languages: [],
    social:[],
    errorUser:false
    

}

const profileReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                ...action.payload,
                city: action.payload.city,
                languages: action.payload.languages,
                social: action.payload.social,
            }
        case ERROR_USER:
            return {
                ...state,
                errorUser: true,
            }
    }
    return state
}

export const setProfileData = ({city, languages, social}) => ({ type: SET_PROFILE_DATA, payload: { city, languages, social } })
export const errorUser = () => ({ type: ERROR_USER})

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
 


export const fetchProfile=(id)=>(dispatch)=>{
    axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`,
    ).then(({data})=>{
        console.log("dataProfile",data)
        if(data.status==="ok")
        {
         dispatch(setProfileData(data.data))
        }
        else if(data.status==="err")
        {
            dispatch(errorUser())
        }
  });
}



export default profileReducer;