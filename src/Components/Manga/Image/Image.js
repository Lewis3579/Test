import React from "react";
import { Outlet, useLoaderData, NavLink} from "react-router-dom";
import 'tachyons'

const Image = ()=>{
        const currents = useLoaderData();
        const chaptercomponent = currents.map((current,i) =>{
            return (
                <div >
                    <img src={`../Manga/${currents[i].title}/${currents[i].chapter}/${currents[i].pic}`} alt="  "/>
                </div>
            )
        })
        const deleteChapter = () =>{
            fetch('http://localhost:3000/deletechapter')
            .then(response => response.json())
            .then(data =>{
                console.log(data)
            })
            alert('Chapter deleted!');
        }
        return(
            <div>
                {chaptercomponent}
                <NavLink to="uploadimage"><h1 className='white'>Upload Image</h1></NavLink>
                <input onClick={deleteChapter} type="submit" value="Delete Chapter"/>
                <Outlet/>
            </div>
        )
}
export const mangaLoader = async({params}) =>{
    const {id} = params;
    const res = await fetch('http://localhost:3000/content/'+id)
    return res.json();
}
export default Image;