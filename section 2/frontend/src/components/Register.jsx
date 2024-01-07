import React from 'react'
import { useFormik } from 'formik'


const Register = () => {
  
  const RegisterForm = useFormik({
    initialValues:{
      name: '',
      
    }
  })




  return (
    <div className='vh-200 bg-info-subtle'>
      <div className='col-md-4 mx-auto py-5'>
        <div className='card'>
          <div className='card-body p-4'>
            <form>
              <h1>Register Form</h1>
              <hr/>
              <label htmlFor=''>Name</label>
              <input type='text' className='form-control mb-4' placeholder='enter your name'></input>
              <label htmlFor=''>Email</label>
              <input type='text' className='form-control mb-4' placeholder='enter your email'></input>
              <label htmlFor=''>contact Number</label>
              <input type='number' className='form-control mb-4' placeholder='enter your number'></input>
              <label htmlFor=''>Address</label>
              <input type='text' className='form-control mb-4' placeholder='enter your address'></input>
              <label htmlFor=''>Password</label>
              <input type='password' className='form-control mb-4' placeholder='enter your password'></input>

              <button type='sbmit' className='btn btn-danger w-100'>Register</button>

            </form>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register
