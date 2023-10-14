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
function Register(){
    let navigate = useNavigate()
    let [isLoading, setIsLoading] = useState(false)
    async function register(values){
        
        setIsLoading(true)
        //console.log(values)
        let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values).catch((err) => {
            setIsLoading(false)
        console.log(err)
        })
        //console.log(data)
     setIsLoading(false)
     navigate("/login")
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
    name: Yup.string().min(3, 'Min length must be greater than 3').max(20,'Min length must be less than 20').required('Name is required'),
    email: Yup.string().required('Email is required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Enter valid Email"),
    password: Yup.string().required('Password is required').matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "Password must contain letters, numbers and special character"),
    rePassword: Yup.string().required('Repassword is required').matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).oneOf([Yup.ref('password', "Password doesn't match")]),
    phone: Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/, "Enter valid Egyptian Phone Number"),
    
})


let formik = useFormik ({
    initialValues:{
        name:'',
        email:'',
        password:'',
        rePassword:'',
        phone:''
    },

     validationSchema,

     onSubmit:register

})

    return(
        <> 
        <div className="my-5"> 
        <div className="m-auto w-50"> 

        <h1>Register Now:</h1>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onBlur={formik.handleBlur} value={formik.values.name}  onChange={formik.handleChange} className="form-control mb-2" type="text" name="name" id="name" />
            {formik.errors.name && formik.touched.name ? <div className="alert alert-danger">
            <p>{formik.errors.name}</p> 
            </div>: null}

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

            <label htmlFor="rePassword">Repassword</label>
            <input value={formik.values.rePassword} onChange={formik.handleChange} className="form-control mb-2" type="password" name="rePassword" id="rePassword" />
            {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger">
            <p>{formik.errors.rePassword}</p> 
            </div>: null}

            <label htmlFor="phone">Phone</label>
            <input value={formik.values.phone} onChange={formik.handleChange} className="form-control mb-2" type="tel" name="phone" id="phone" />
            {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger">
            <p>{formik.errors.phone}</p> 
            </div>: null}


            <button  disabled={isLoading} className="btn btn-success mt-3 text-white ms-auto d-block">Register</button>
            
        </form>
        </div>
        </div>
        </>
    )
}
export default Register