import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
           
            <h2>Travel </h2>
           <Link to="/" ><h2>Home</h2></Link>
          <Link to="/create"> <h2>Create Blog</h2></Link> 

         
           
             </nav>
      );
}
 
export default Navbar;