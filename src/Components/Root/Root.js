import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import 'tachyons';

const Root = () =>{
    return(
        <div>
            <NavLink className="dib  pr6 bg-center" to="frontpage"><h1 className='white'>FrontPage</h1></NavLink>
            <NavLink className="dib  pr6 bg-center" to="favourite"><h1 className='white'>Favourite</h1></NavLink>
            <NavLink className="dib  pr6 bg-center" to="uploadmanga"><h1 className='white'>Upload Manga</h1></NavLink>
            
            <Outlet/>
        </div>
        
    )
}
export default Root;