import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import 'tachyons';

const Root = () =>{
    return(
        <div>
            <NavLink to="frontpage"><h1 className='white'>FrontPage</h1></NavLink>
            <Outlet/>
        </div>
        
    )
}
export default Root;