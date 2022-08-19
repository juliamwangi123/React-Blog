 import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 

        <div className="navbar">
             <nav>
                <div className="logo">
                <Link to="/"><img src="https://demos.codetipi.com/zeen-volar/wp-content/uploads/sites/32/2019/11/volar-mob@2x.png.webp" alt="" /></Link>

                </div>
            <ul>
                <li><Link to= '/fashion'>LIFESTYLE</Link></li>
                <li><Link to= '/lifestyle'>FASHION</Link></li>
                <li><Link to='/street'>STREET</Link></li>
                <li><Link to='/addblog'>ADD BLOG</Link></li>

                


            </ul>
        </nav>
        </div>
       
     );
}
 
export default Navbar;