import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';




const SignupSchema = Yup.object().shape({

  email: Yup.string().email('email is invalid').required(' Required'),
  password: Yup.string().required('Password is Required').min(8, 'Password is too short')
});



const Login = () => {

  const Loginform = useFormik({
    initialValues: {

      email: '',
      password: ''
    },
    onSubmit: (values) => { console.log(values); },
    validationSchema: SignupSchema
  });


  return (
    <div className='vh-100'>
      <div className=' py-5 vh-100 bg-info-subtle'>
        <div className="col-md-3 mx-auto py-5">
          <div className='card rounded-3'>
            <div className="card-body">
              <h3 className='text-center my-3'>Login Form</h3>
              <hr />
              <form onSubmit={Loginform.handleSubmit}>
                <label htmlFor="">Email Address</label>
                <span className='ms-4 fs-6 text-danger'>{Loginform.errors.email}</span>
                <input type="text" className='form-control mb-4' id='email' onChange={Loginform.handleChange} value={Loginform.values.email} />
                <label htmlFor="">Password</label>
                <span className='ms-4 fs-6 text-danger'>{Loginform.errors.password}</span>
                <input type="password" className='form-control mb-4' id='password' onChange={Loginform.handleChange} value={Loginform.values.password} />

                <button className='btn btn-primary w-100 mt-4' type='submit'>Log In</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  )
}

export default Login