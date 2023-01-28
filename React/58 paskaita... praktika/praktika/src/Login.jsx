import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from "react";
import UserContext from './UserContext';
import { Link } from 'react-router-dom';

const Login = () => {

  const [failedLogIn, setFailedLogIn] = useState(false);

  const { users, setLoggedInUser } = useContext(UserContext);


  const handleSubmit = (values) => {
    // Find the user in the array that matches the entered username and password
    const user = users.find(user => user.username === values.username && user.password === values.password);
    if (user) {
      setLoggedInUser(user)
      console.log('Logged in successfully')
    } else {
      setFailedLogIn(true);
      console.log('Login failed')
    }
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required')
  });

  return (
    <>
      <div className="Login">
        <Formik

          initialValues={{
            username: '',
            password: ''
          }}

          validationSchema={validationSchema}

          onSubmit= {(values, {resetForm} )=> {
            console.log(values);
            resetForm({values: ''}) //reset
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values, setValues}) => (
            <Form>
              <div className='loginField'>
                <Field
                  className="loginFieldInput"
                  type="text"
                  name="username"
                  placeholder={
                    errors.username && touched.username ? 
                      errors.username.toString()
                      : 'Enter your username'
                    }
                  value={values.username} 
                  onChange={(e)=>setValues({...values, username:e.target.value})}
                />
                
              </div>

              <div className='loginField'>
                <Field
                  className="loginFieldInput"
                  type="password"
                  name="password"
                  placeholder={errors.password && touched.password ? 
                                errors.password.toString()
                                : 'Enter your password'
                    }
                  value={values.password} 
                  onChange={(e)=>setValues({...values, password:e.target.value})}
                />
                </div> 
                
              <button className='loginButton' type="submit">Log In</button>
            </Form>
          )}
        </Formik>
        
          <div className='failedLogin'>
            {failedLogIn && <p>Indavild username or password</p>}
          </div>
      
        
          <Link to='/register'><div className='register'><p>Don't have an account? Click here to register.</p></div></Link>
      </div>
    </>
  );
}

export default Login;