import React from "react";
import 'tachyons';
import FavouriteTitle from "../FavouriteTitle/FavouriteTitle";
const FavouriteList = ({mangas})=>{
        const MangaComponent = mangas.map((manga,i) =>{
            return (
                <FavouriteTitle key ={i} manga_id={mangas[i].manga_id} title = {mangas[i].title} cover={mangas[i].cover}/>
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
export default FavouriteList;