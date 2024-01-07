
import React,{useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(4, 'Name is too short'),
  email: Yup.string().email('email is invalid').required(' Required'),
  password: Yup.string().required('Password is Required').min(8, 'Password is too short')
  .matches(/[a-z][A-Z]\d/, 'Password must include uppercase and lowercase letter and a number'),
  confirm: Yup.string().oneOf([Yup.ref('password'),null], 'Password must match').required('Confirm Password is required')
  
});

const Signup = () => {

  const [PasswordHidden, setPasswordHidden] = useState(true);

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm:''
    },
    onSubmit: (values) => { console.log(values); },
    validationSchema: SignupSchema
  });

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto py-5'>
        <div className="card">
          <div className="card-body p-4">
            <form onSubmit={signupForm.handleSubmit}>
              <h2 className='text-center'>Sign Form</h2>
              <hr />

              <label htmlFor="">Name</label>
              <span className='ms-4 fs-6 text-danger'>{signupForm.touched.name &&  signupForm.errors.name}</span>
              <input type="text" className='form-control mb-4' id="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
              <label htmlFor="">Email Address</label>
              <span className='ms-4 fs-6 text-danger'>{signupForm.touched.email &&  signupForm.errors.email}</span>
              <input type="text" className='form-control mb-4' id="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
              <label htmlFor="">Password</label>
              <span className='ms-4 fs-6 text-danger'>{signupForm.touched.password &&  signupForm.errors.password}</span>
              <input type= {PasswordHidden?'Show':'Hide'}  className='form-control mb-4' id='password' onChange={signupForm.handleChange} value={signupForm.values.password} />
              <label htmlFor="">Confirm Password</label>
              <span className='ms-4 fs-6 text-danger'>{ signupForm.touched.confirm && signupForm.errors.confirm}</span>
              <input type= {PasswordHidden?'password':'text'} className='form-control mb-4' id='confirm' onChange={signupForm.handleChange} value={signupForm.values.confirm} />


              <button type='button'  onClick={()=>{setPasswordHidden(!PasswordHidden)}}>{PasswordHidden?'Show':'Hide'}</button>

              <button type='submit' className='btn btn-danger w-100 mt-5'>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;