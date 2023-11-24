import React from "react";
import "./MangaList.css";
import 'tachyons';

const MangaList = ({mangalist, setMangaInfo, mangaComponent, handleList}) =>{
    const AddToList = mangaComponent;
    return(
        <>
        {
            mangalist?(
                mangalist.map((manga,index)=>{
                    return(
                        <div className="card" key={index} onClick={()=> setMangaInfo(manga)}>
                            <img src={manga.images.jpg.large_image_url} alt="mangaImg"/>
                            <div className="manga-info">
                                <h4>{manga.title}</h4>
                                <div className="overlay" onClick={()=>handleList(manga)}>
                                    <h4>{manga.title.title_japanese}</h4>
                                    <h3>Synopsis</h3>
                                    <div className="synopsis">
                                        <p>{manga.synopsis}</p>
                                    </div>
                                    <AddToList/>
                                </div>
                            </div>
                        </div>
                    )
                })
            ):"Loading"
        }
            
        </>
    )
}
export default MangaList;