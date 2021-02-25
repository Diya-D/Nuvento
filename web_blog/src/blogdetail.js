import { useParams,useHistory } from "react-router-dom";
import useFetch from "./usefetch";
const Blogdetail = () => {
    const {id}=useParams();
    const history=useHistory();
    const {blogs,error,IsPending}=useFetch('http://localhost:8000/blogs/'+id)
    const deleteBlog=()=>{
        fetch('http://localhost:8000/blogs/'+blogs.id,{
      method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    const UpdateBlog=(id)=>{
     // history.push("/update/blogs/:id")
       history.push(`/update/blogs/${blogs.id}`)
    }
    return ( 
        <div className="blogdetail">
            {IsPending&&<div>Loading...</div>}
           {error&&<div>{error}</div>}
           {blogs&&(
             <div className="body">
            <article className="article">
            
                   <h1>{blogs.title}</h1>
                   
                   <button onClick={deleteBlog}>delete</button>
                   <button onClick={UpdateBlog}>Edit</button>
                   <h2>written by {blogs.author}</h2>
                   
                    <p>{blogs.body}</p>
                   
               </article>
               </div>
           )}

        </div>
     );
}
 
export default Blogdetail;