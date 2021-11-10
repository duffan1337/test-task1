import React from "react";
import {Formik} from 'formik'
import * as yup from 'yup'
import "./LoginBody.css"
import loginImg from "./loginIcon.jpg"
import { postLoginData } from "../../Redux/reducers/login";
import { useSelector, useDispatch} from "react-redux";
const LoginBody = ()=>{

    const dispatch=useDispatch()

    const validationsSchema=yup.object().shape({
        email:yup.string().typeError("Введите корректный email! ").required('Обязательно'),
        password:yup.string().typeError("Введите корректный Пароль ").required('Обязательно')
    })

    const formDataSubmit=(values)=>{
        dispatch(postLoginData(values))
    }

    
    const {errorLogin}=useSelector((state)=>{
        return{
            errorLogin:state.auth.errorLogin
        };
      });
    console.log("error",errorLogin)
    return(
        <div className="body">
            <div className={"task"}>
                <div className="icon">
                    <img src={loginImg}></img>
                </div>
                <div>
                    <p className="TextLogin">Log In</p>
                    <p className="TextUnderLogin">We will create an account, if you do not have one, just enter your mail</p>
                </div>
                <Formik initialValues={{email:"", password:""}} validateOnBlur onSubmit={(values)=>{formDataSubmit(values)}} validationSchema={validationsSchema}>
                {({ values, errors, touched, handleChange, handleBlur, isValid,handleSubmit, dirty})=>
                (<div>
                    {errorLogin ? "Имя пользователя или пароль введены не верно":""}
                    <div className="mailLoginBlock">
                        <p>Email</p>
                        <input className = "LoginMailForm"
                        className={"LoginMailForm"}
                        type={"text"}
                        name={`email`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}></input>
                    </div>
                    {touched.email && errors.email && <p className={"error"}>{errors.email}</p>}
                    <div className= "passwordLoginBlock">
                        <p>Password</p>
                        <input
                        className={"LoginPasswordForm"}
                         type={"password"}
                        name={`password`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}></input>
                    </div>
                    {touched.password && errors.password && <p className={"error"}>{errors.password}</p>}
                    <button disabled={!isValid && !dirty} onClick={handleSubmit} type={'submit'} className="nextBtn">Submit</button>
                </div>)}
                </Formik>
            </div>
        </div>
    )
}

export default LoginBody




{/* <Formik initialValues={{email:"", password:""}} validateOnBlur onSubmit={(values)=>{formDataSubmit(values)}} validationSchema={validationsSchema}>
{({ values, errors, touched, handleChange, handleBlur, isValid,handleSubmit, dirty})=>
(<div className = {"mailLoginBlock"}>
    <p> Email
        <label htmlFor={"email"}> email</label><br/>
        <input
        className = "LoginMailForm"
        type={"text"}
        name={`email`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        />
    </p>
    {touched.email && errors.email && <p className={"error"}>{errors.email}</p>}
    <p>
        <label htmlFor={"password"}> password</label><br/>
        <input
        type={"password"}
        name={`password`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        />
    </p>
    {touched.password && errors.password && <p className={"error"}>{errors.password}</p>}
    <button disabled={!isValid && !dirty} onClick={handleSubmit} type={'submit'}>Send</button>
</div>)}
</Formik> */}