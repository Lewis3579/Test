import React from "react";
import "./MangaInfo";
import "tachyons";

const MangaInfo = ({props}) =>{
    const {title, source, rank, score,popularity,members, status, rating, duration} = props.mangaInfo
    return(
        <>
            <div className="manga-content">
                <h3>{title}</h3><br/>
                <img src={props.mangaInfo.images.jpg.large_image_url}/>
                <div className="info">
                    <h3>#Rank: {rank}</h3>
                    <h3>#Score: {score}</h3>
                    <h3>#Popularity: {popularity}</h3> <hr/> <br/>
                    <h4>Members:{members} </h4>
                    <h4>Source:{source} </h4>
                    <h4>Duration:{duration} </h4>
                    <h4>Status:{status} </h4>
                    <h4>Rating:{rating} </h4>
                    
                </div>
            </div>
        </>
    )
}
export default MangaInfo;