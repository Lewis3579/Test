import React from "react";
import 'tachyons';
import './MangaTitle.css'

const MangaTitle = ({id,title,cover}) =>{
    return(
        <>
            <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
            <div>
                <img src={`${cover}`} alt="..."/>
            <div>
                <h1>{title}</h1>
            </div>
            </div>
        </div>
        </>
    )
}
export default MangaTitle;