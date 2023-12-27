import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <div>
            <Link to="/">PayWise</Link>
            <Link to="/Card">Card</Link>
            <Link to="/Login">Login</Link>
        </div>
    )
}
export default Navbar;