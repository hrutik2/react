import { Route,Routes } from "react-router-dom";
import Home from "../pages/home";
import Card from "../pages/card";
import Login from "../pages/login";

const AllRoutes=()=>{
     return(
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Card" element={<Card/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
     
     </Routes>
     )
}
export default AllRoutes