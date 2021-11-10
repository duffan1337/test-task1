import React from "react";
import "./Profile.css"
import { useSelector, useDispatch} from "react-redux";
import { fetchProfile } from "../../Redux/reducers/profile";

const Profile = ()=>{

    const dispatch=useDispatch()

      React.useEffect(()=>{
        dispatch(fetchProfile(1))
     },[]);
    

      const {city}=useSelector((state)=>{
        return{
            city:state.profile.city
        };
      });
      const {languages}=useSelector((state)=>{
        return{
            languages:state.profile.languages
        };
      });
      const {social}=useSelector((state)=>{
        return{
            social:state.profile.social
        };
      });
      const {id}=useSelector((state)=>{
        return{
            id:state.auth.id
        };
      });
      const {errorUser}=useSelector((state)=>{
        return{
          errorUser:state.profile.errorUser
        };
      });

      console.log()
    return(
        <div className="profileBody">
          {!errorUser ?
          <div>
            <div>
            Город: {city}
            </div>
            <div>
            Знание языков: {languages.map((element)=><li>{element}</li>)}
            </div>
            <div>
            Ссылки: {social.map((element)=><li> {element.label}<br/><a>{element.link}</a></li>)}
            </div>
          </div>
          :"Пользователь не найден"}
        </div>
    )
}

export default Profile