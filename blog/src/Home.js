import useFetch from "./useFetch";
import { Link } from "react-router-dom";
const Home = () => {
    const {data:blogs, isPending, error} =useFetch('http://localhost:8000/blogs');
    return (  
        <div className="home">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}

            <div className="top">
                <div className="one"
                onMouseOver={()=>{
                    const parent =document.querySelector('.top')
                    parent.style.backgroundImage='url("https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/11/zeen-fashion-00021-1400x934.jpg.webp")'
                }}
                    >
                        <div className="innerdiv">
                            {blogs &&
                            <div className="overlay">
                            <small>{blogs[0].title}</small>
                            
                            <Link to={`/blogs/${blogs[0].id}`}>
                            <p>{blogs[0].sub}</p>     
                            <small>{blogs[0].starter} <span>Read More...</span></small>
                            </Link>


                            </div>}
                        </div>
                </div>
                <div className="two"
                onMouseOver={()=>{
                    const parent =document.querySelector('.top')
                    parent.style.backgroundImage='url("https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/11/woman-fashion-vid-1155x720.jpg.webp")'
                }}
               >
                 <div className="innerdiv">
                            {blogs &&
                            <div className="overlay">
                            <small>{blogs[1].title}</small>
                            <Link to={`/blogs/${blogs[1].id}`}>
                            <p>{blogs[1].sub}</p>     
                            <small>{blogs[0].starter} <span>Read More...</span></small>
                            </Link>

                            </div>}
                        </div>
                </div>
                <div className="three"
                  onMouseOver={()=>{
                    const parent =document.querySelector('.top')
                    parent.style.backgroundImage='url("https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/11/zeen-fashion-00013-1024x683.jpg.webp")'
                }}
              >
                 <div className="innerdiv">
                            {blogs &&
                            <div className="overlay">
                            <small>{blogs[2].title}</small>
                            <Link to={`/blogs/${blogs[2].id}`}>
                            <p>{blogs[2].sub}</p>     
                            <small>{blogs[2].starter} <span>Read More...</span></small>
                            </Link>

                            </div>}
                        </div>
                </div>
            </div>


            <div className="bottomdiv">
                        <div className="leftblogs">
                            <div className="first">
                            <img src="https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2020/06/zeen-fashion-00030-293x293.jpg.webp" alt="" />

                            {blogs &&
                            <div className="bl">
                            <small>{blogs[0].title}</small>
                            <Link to={`/blogs/${blogs[0].id}`}>
                            <p>{blogs[2].sub}</p>     
                            <small>{blogs[2].starter} <span>Read More...</span></small>
                            </Link>
                            
                            </div>
                            



                            
                            }
                            
                            
                        </div>
                        <div className="Midblock">
                            
                        </div>
                        <div className="second">
                        <img src="https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2020/06/zeen-fashion-00031-585x775.jpg.webp" alt="" />

                            {blogs &&
                            <div className="bl">
                            <small>{blogs[1].title}</small>
                            <Link to={`/blogs/${blogs[1].id}`}>
                            <p>{blogs[1].sub}</p>     
                            <small>{blogs[1].starter}Read More...</small>
                            </Link>
                            
                            </div>}
                            
                        </div>
                        
                        

                       
                            
                        </div>

                        <div className="rightblogs">
                            <div className="rleft"
                                       onMouseOver={()=>{
                                        const parent =document.querySelector('.rightblogs')
                                        parent.style.backgroundImage='url("https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/11/zeen-fashion-00034-683x1024.jpg")'
                                    }}>
                            <div className="innerdiv">
                            {blogs &&
                            <div className="overlay">
                            <small>{blogs[1].title}</small>
                            <Link to={`/blogs/${blogs[1].id}`}>
                            <p>{blogs[1].sub}</p>     
                            <small>{blogs[1].starter}Read More...</small>
                            </Link>

                            </div>}
                        </div>

                            </div>
                            <div className="rright"

                              onMouseOver={()=>{
                                        const parent =document.querySelector('.rightblogs')
                                        parent.style.backgroundImage='url("https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/11/zeen-fashion-00019-894x1024.jpg.webp")'
                                    }}
                            
                            >
                         <div className="innerdiv">
                            {blogs &&
                            <div className="overlay">
                            <small>{blogs[0].title}</small>
                            <Link to={`/blogs/${blogs[0].id}`}>
                            <p>{blogs[0].sub}</p>     
                            <small>{blogs[0].starter}Read More...</small>
                            </Link>

                            </div>}
                        </div>

                            </div>

                        </div>
            </div>

            <section class="home-newsletter">
                    <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                    <div className="single">
                    <p>Subscribe To Volar</p>
                    <p>Subscribe to stay up to date and stay notified about exclusive offers</p>
                    <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter your email"/>
                    <span className="input-group-btn">
                    <button className="btn btn-theme" type="submit">Subscribe</button>
                    </span>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="subImage">
                        <img src="https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/11/zeen-fashion-00038.png.webp" alt="" />
                    </div>
                    </section>



                                <div className="fashion">
                                    <p>Fashion At Viola</p>
                                </div>
            <div className="bottomdiv">
            <div className="rightblog">

                            <div className="rleft"
                                       onMouseOver={()=>{
                                        const parent =document.querySelector('.rightblog')
                                        parent.style.backgroundImage='url("https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/05/zeen-fashion-00029-1024x682.jpg.webp")'
                                    }}>
                            <div className="innerdiv">
                            {blogs &&
                            <div className="overlay">
                            <small>{blogs[2].title}</small>
                            <Link to={`/blogs/${blogs[2].id}`}>
                            <p>{blogs[2].sub}</p>     
                            <small>{blogs[2].starter}Read More...</small>
                            </Link>

                            </div>}
                        </div>

                            </div>
                            <div className="rright"

                              onMouseOver={()=>{
                                        const parent =document.querySelector('.rightblog')
                                        parent.style.backgroundImage='url("https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/11/zeen-fashion-00035-585x775.jpg.webp")'
                                    }}
                            
                            >
                         <div className="innerdiv">
                            {blogs &&
                            <div className="overlay">
                            <small>{blogs[0].title}</small>
                            <Link to={`/blogs/${blogs[0].id}`}>
                            <p>{blogs[0].sub}</p>     
                            <small>{blogs[0].starter}Read More...</small>
                            </Link>

                            </div>}
                        </div>

                            </div>

                        </div>
                        <div className="leftblogs">
                            <div className="first">
                            <img src="https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/11/zeen-fashion-00026-585x775.jpg.webp" alt="" />

                            {blogs &&
                            <div className="bl">
                            <small>{blogs[1].title}</small>
                            <Link to={`/blogs/${blogs[1].id}`}>
                            <p>{blogs[1].sub}</p>     
                            <small>{blogs[1].starter}Read More...</small>
                            </Link>
                            </div>}
                            
                        </div>
                        <div className="Midblock">
                            
                        </div>
                        <div className="second">
                        <img src="https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/11/zeen-fashion-00007-1024x683.jpg.webp" alt="" />

                            {blogs &&
                            <div className="bl">
                            <small>{blogs[0].title}</small>
                            <Link to={`/blogs/${blogs[0].id}`}>
                            <p>{blogs[0].sub}</p>     
                            <small>{blogs[0].starter}Read More...</small>
                            </Link>
                            </div>}
                            
                        </div>
                        
                        

                       
                            
                        </div>

                       
            </div>

            <footer>
                <p>VIOLA</p>
                <small>All Rights Reserved</small>
            </footer>
                


                   
            
        </div>
    );
}
 
export default Home;