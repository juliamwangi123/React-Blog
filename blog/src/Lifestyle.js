import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const LifeStyle = () => {
    const {data:blogs} = useFetch('http://localhost:8000/blogs')
    return (
        <div className="lifestyle">
             {blogs &&  <div className='genere'>{
                  
        <ul className="card-wrapper">
            {blogs.filter(blog =>{
                    return blog.title === 'Fashion'
                 }).map((b)=>(
            <li className="card" key={b.id}>
            <img src='https://images.unsplash.com/photo-1613230485186-2e7e0fca1253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt='' />
            
            <p>{b.title}</p>
            <Link to={'/blogs/' + b.id} ><p>{b.starter}</p></Link>
         </li>))}
        </ul>
                 
}</div>


   }
        </div>








      );









    
}
 
export default LifeStyle;
