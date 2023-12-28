import { Link } from "react-router-dom";
import { Nav } from "../css/navbar";
const Navbar=()=>{
    return(
        <Nav>
            <div >
            <Link to="/"><b><i>PayWise</i></b></Link>
            </div>
            <div >
            <Link to="/Login"><b><i>Login</i></b></Link>
            </div>
        </Nav>
    )
}
export default Navbar;