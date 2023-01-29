import PostContext from "../context/PostContext";
import { useContext } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";



const EditPostForm = () => {

  const {posts, updatePost} = useContext(PostContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const currentPost = posts.find(post => post.id.toString() === id)

  console.log(currentPost)

  const handleSubmit = (values) => {
    updatePost(id, values);
    navigate('/')
  }


  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, "title must be 5 characters or less.")
      .max(15, 'title must be 15 characters or less.')
      .required('This field must be filled.'),
    description: Yup.string()
      .min(5, 'description must be at least 5 characters length.')
      .max(200, 'description must be 200 characters or less.')
      .required('This field must be filled.'),
    image: Yup.string()
      .required('This field must be filled.')
  }); 

  return ( 
    <>
    Edit post Form
    <Formik
      initialValues={{
        title: currentPost.title,
        description: currentPost.description,
        image: currentPost.image
      }} 

      validationSchema={validationSchema}
  
      onSubmit= {(values, {resetForm} )=> {
        console.log(values);
        resetForm({values: ''})
        handleSubmit(values);
      }}
    >
          
      {({ errors, touched, values, setValues }) => (

        <Form className='registerForm'>
          <label>Meal title:
            <Field 
              name='title'
              value={values.title} 
              onChange={(e)=>setValues({...values, title:e.target.value})}
            />
             {
              errors.title && touched.title ? 
              <span>{errors.title}</span> : null     
              }
          </label>

          <label>Meal Description:
            <Field 
              type="text"
              name='password'
              value={values.description} 
              onChange={(e)=>setValues({...values, description:e.target.value})}
            />
            {
              errors.description && touched.description ? 
              <span>{errors.description}</span> : null
            }
          </label>
  
          <label>Image:
            <Field 
              type="url"
              name='image'
              value={values.image} 
              onChange={(e)=>setValues({...values, image: e.target.value})}
            />
            {
              errors.image && touched.image ? 
              <span>{errors.image}</span> : null
            }
          </label>  

          <button className="PostButton" type='submit'>Edit Meal</button>
        </Form>
      )}
    </Formik>  
    </>
  );
}
export default EditPostForm;