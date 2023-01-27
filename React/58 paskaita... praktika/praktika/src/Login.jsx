import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from "react";
import UserContext from './UserContext';

const Login = () => {

  const [failedLogIn, setFailedLogIn] = useState(false);

  const { users, setLoggedInUser } = useContext(UserContext);

  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (values) => {
    console.log(users)
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

          initialValues={values}

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
                  placeholder="username"
                  value={values.username} 
                  onChange={(e)=>setValues({...values, username:e.target.value})}
                />
                {
                  errors.username && touched.username ? 
                    <p>{errors.username}</p>
                    : null
                  }
              </div>

              <div className='loginField'>
                <Field
                  className="loginFieldInput"
                  type="password"
                  name="password"
                  placeholder="password"
                  value={values.password} 
                  onChange={(e)=>setValues({...values, password:e.target.value})}
                />
                {
                  errors.password && touched.password ? 
                    <p>{errors.password}</p>
                    : null
                  }
                </div> 
              <button className='loginButton' type="submit">Log In</button>
            </Form>
          )}
        </Formik>
        <br />
        
      </div>
    </>
  );
}

export default Login;