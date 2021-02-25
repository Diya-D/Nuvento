import {Formik,Form,Field} from 'formik'
import {useHistory} from 'react-router-dom'
import * as Yup from 'yup' 

const Create = () => {
    const history=useHistory();
    const Schema=Yup.object().shape({
        title:Yup.string()
        .min(2,'too short')
        .required('required'),
        body:Yup.string()
        .min(2,'too short')
        .required('required'),
        author:Yup.string()
        .required('required'),
       
      })
    const handleSubmit=(values)=>{
   
    fetch ('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"Content-Type":"application/json" },
        body:JSON.stringify(values)
    }).then(()=>{
        alert("new blog added")
        history.push('/')
    })
        
    }

    return(
        <div className="create">
            
           <Formik
           initialValues={{
            title:"",
            body:"",
            author:"",
             }}
            //  onSubmit={values=>{

            //     alert(JSON.stringify(values))
            //    }}
            onSubmit={handleSubmit}
            validationSchema={Schema}
           >
               {({errors})=>(
               <Form>
                   <div className="form-group">
                       <label htmlFor="title">Title</label>
                       <Field name="title" type="text"></Field>
                       {errors.title?<div>{errors.title}</div>:null}
                   </div>
                   <div className="form-group">
                       <label htmlFor="body">Write blog here</label>
                        <Field as="textarea"name="body" type="text"></Field>
                        {errors.body?<div>{errors.body}</div>:null}
                   </div>
                   <div className="form-group">
                       <label htmlFor="author">Author</label>
                       <Field as="select"name="author" type="text">
                      
                       <option value="">select</option>
                       <option value="author1">author1</option>
             <option value="author2">author2</option>
             <option value="author3">author3</option>
                       </Field>
                       {errors.author?<div>{errors.author}</div>:null}
                   </div>
                   <button type="submit" className="btn btn-primary" >Submit</button>
               </Form>
               )}

           </Formik>
        </div>
    )
}

export default Create;