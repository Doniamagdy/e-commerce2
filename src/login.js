import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
// class Register extends Component {
//     render() {
//       return    <h1>Register</h1>;

//     }
//   }

//   export default Register
function Login(){
    let navigate = useNavigate()
    let [isLoading, setIsLoading] = useState(false)
    async function Login(values){
        
        setIsLoading(true)
        //console.log(values)
        let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values).catch((err) => {
            
            setIsLoading(false)
        console.log(err)
        })
        //console.log(data)
        localStorage.setItem("token", data.token)
     setIsLoading(false)
     navigate("/home")
    }

function validate(values){
    let errors={}
    if (values.name ==""){
        errors.name =" Name is required"
    }else if(values.name.length < 3 ){
        errors.name = "Min length must be greater than 3"
    }else if(values.name.length > 20 ){
        errors.name = "Min length must be less than 20"
    }


    if (values.email == ""){
        errors.email=" Email is required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email= "Enter valid Email"


    if (values.password == ""){
        errors.password=" Password is required"
    }else if(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password))
    errors.password= "Password must contain letters, numbers and special character"

    if (values.rePassword == ""){
        errors.rePassword =" Password is required"
    }else if((values.password != values.rePassword))
    errors.rePassword = "Password and repassword doesn't match"

    if (values.phone == ""){
        errors.phone=" Phone number is required"
    }else if(/^01[0125][0-9]{8}$/.test(values.phone))
    errors.phone= "Enter egyptian phone number"

    return errors
}

let validationSchema = Yup.object({
    email: Yup.string().required('Email is required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Enter valid Email"),
    password: Yup.string().required('Password is required').matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "Password must contain letters, numbers and special character"),
    
})


let formik = useFormik ({
    initialValues:{
       
        email:'',
        password:'',
       
    },

     validationSchema,

     onSubmit:Login

})

    return(
        <> 
        <div className="my-5"> 
        <div className="m-auto w-50"> 

        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
            

            <label htmlFor="email">Email</label>
            <input value={formik.values.email} onChange={formik.handleChange} className="form-control mb-2" type="email" name="email" id="email" />
            {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">
            <p>{formik.errors.email}</p> 
            </div>: null}

            <label htmlFor="password">Password</label>
            <input value={formik.values.password} onChange={formik.handleChange} className="form-control mb-2" type="password" name="password" id="password" />
            {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">
            <p>{formik.errors.password}</p> 
            </div>: null}

          


            <button  disabled={isLoading} className="btn btn-success mt-3 text-white ms-auto d-block">Login</button>
            
        </form>
        </div>
        </div>
        </>
    )
}
export default Login