import React from "react";
import "./News.css"
import { useSelector, useDispatch} from "react-redux";
import { fetchNews } from "../../Redux/reducers/news";
const News = ()=>{

    const dispatch=useDispatch()

      React.useEffect(()=>{
        dispatch(fetchNews())
     },[]);
    

      const {count}=useSelector((state)=>{
        return{
          count:state.news.count
        };
      });
      const {data}=useSelector((state)=>{
        return{
          data:state.news.data
        };
      });
      console.log("news", data)
      // const {title}=useSelector((state)=>{
      //   return{
      //     title:state.news.title
      //   };
      // });
      // const {text}=useSelector((state)=>{
      //   return{
      //     text:state.news.text
      //   };
      // });

      console.log()
    return(
        <div className="profileBody">
            count task={data.length}
            {data.map((element, index)=>( <div>
              <div>{element.title} </div><br/>
               <div>{element.text} </div><br/>
               </div>))}
        </div>
    )
}

export default News