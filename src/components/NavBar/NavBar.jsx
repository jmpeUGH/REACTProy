//En este NavBar voy a meter lo que tenía en App
import {Link} from "react-router-dom"



const NavBar = ({user, logoutUser})=>{

    return(
        <nav>
        <ul className='menu'>
          
          <li><Link to="/">Home</Link></li>
          <li>{user ? <Link to="/profile">Perfil</Link> : <Link to="/register">Registrar usuario</Link>}</li>
          
          <li>{user ? <button onClick={logoutUser}>Logout</button> : <Link to="/login">Login</Link>}</li>
        </ul>
      </nav>

    )


}

export default NavBar;