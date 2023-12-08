import React from "react";
import 'tachyons';
import MangaTitle from "../MangaTitle/MangaTitle";
const MangaList = ({mangas})=>{
        const MangaComponent = mangas.map((manga,i) =>{
            return (
                <MangaTitle key ={i} id={mangas[i].manga_id} title = {mangas[i].title} cover={mangas[i].cover}/>
            )
        })
        
        return(
            <>
                <div>
                    {MangaComponent}
                </div>
            </>
        )
}
export default MangaList;