import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

const Registration = () => {

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    age: ''
    })

    const funkcija = () => {
      console.log('as esu funckcija')
    }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Username must be 5 characters or less.")
      .max(15, 'Username must be 15 characters or less.')
      .required('This field must be filled.')
      .matches(/^[a-zA-Z0-9]+$/, "Username can only contain alphanumeric characters."),
    email: Yup.string()
      .email('Please enter a valid email.')
      .required('This field must be filled.'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 symbols length.')
      .max(20, 'Password must be 20 characters or less.')
      .required('This field must be filled.'),
    passwordRepeat: Yup.mixed()
      .oneOf([Yup.ref('password'), null], 'Passwords must match.')
      .required('This field must be filled.'),
      age: Yup.number()
      .integer('Age has to be a integer number.')
      .required('This field must be filled.')
      .min(18, 'You have to be atleast 7 years old to register.')
      .max(120, "Please enter your real age.")
      // .positive('Age has to be a positive number.')
      }); 

  return ( 
    <>
      <Formik
        initialValues={values} //galima cia ranka israsyti visus values kaip tuscius stringus, tada nereikia useState (nebus nepanaudotas setValues)
        validationSchema={validationSchema}

        onSubmit= {(values, {resetForm} )=> {
          console.log(values);
          resetForm({values: ''}) //reset
          funkcija();
        }}
      >
        
        {({ errors, touched, values, setValues }) => (
        <div className='formContainer'>
          <Form className='registerForm'>
             <label>Username:
                <Field 
                  name='username'
                  value={values.username} 
                  onChange={(e)=>setValues({...values, username:e.target.value})}
                />
                {
                  errors.username && touched.username ? 
                    <span>{errors.username}</span>
                    : null
                }
              </label>

                <br />

              <label>Email:
                <Field 
                  name='email'
                  value={values.email} 
                  onChange={(e)=>setValues({...values, email:e.target.value})}
                />
                {
                  errors.email && touched.email ? 
                    <span>{errors.email}</span>
                    : null
                }
              </label>

              <br />

              <label>Password:
                <Field 
                  type="password"
                  name='password'
                  value={values.password} 
                  onChange={(e)=>setValues({...values, password:e.target.value})}
                />
                {
                  errors.password && touched.password ? 
                    <span>{errors.password}</span>
                    : null
                }
              </label>

                <br />

              <label>Confirm password:
                <Field 
                  type="password"
                  name='passwordRepeat'
                  value={values.passwordRepeat} 
                  onChange={(e)=>setValues({...values, passwordRepeat:e.target.value})}
                />
                {
                  errors.passwordRepeat && touched.passwordRepeat ? 
                    <span>{errors.passwordRepeat}</span>
                    : null
                }
              </label>

              <br />

              <label>Age:
                <Field 
                  type="number"
                  name='age'
                  value={values.age} 
                  onChange={(e)=>setValues({...values, age:e.target.value})}
                />
                {
                  errors.age && touched.age ? 
                    <span>{errors.age}</span>
                    : null
                }
              </label>  

                <br />

                <button type='submit'>Register</button>
          </Form>
          </div>
        )}

        </Formik>  
    </>
   );
}
 
export default Registration;