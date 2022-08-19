 import useFetch from "./useFetch";
 import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => { 
    const {id} =useParams()
    const navigate =useNavigate()
    const {data:blogs} =useFetch(`http://localhost:8000/blogs/${id}`);

    

    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/' + blogs.id,{
            method: 'DELETE'
        })
        navigate('/')
    }

    return ( 
        <div className="blogdetails">
            {blogs && <div>
                <h4>{blogs.title}</h4>
                <p>{blogs.body}</p>
                
            </div>}
                <button onClick ={handleDelete}>Delete</button>
        </div>
       
     );
}
 
export default BlogDetails;