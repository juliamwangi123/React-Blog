const Bloglist = ({blogs}) => {
    return ( 
        <div className="bloglist">
            <h1>blogs</h1>
            {blogs.map((blog)=>(
                <div className="blogs" key={blog.id}>
                    <p>{blog.title}</p>

                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;