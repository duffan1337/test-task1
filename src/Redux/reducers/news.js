
import axios from "axios";

const SET_NEWS_DATA = 'SET_NEWS_DATA'

let initialState = {
    data:[  ],
    // {newsId: null, title: "",text:"",}
    count:0

}

const newsReducer = (state = initialState, action) => {
    console.log(action) 
    switch (action.type) {
        case SET_NEWS_DATA:
            return {
                ...state,
                data:action.payload,
            }
        
    }
    return state
}

export const setNewsData = (data) => ({ type: SET_NEWS_DATA, payload: data})
 
export const fetchNews=()=>(dispatch)=>{
    axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/news`,
    ).then(({data})=>{
        console.log("dataNews",data.data)
         dispatch(setNewsData(data.data))
  });
}

export default newsReducer;