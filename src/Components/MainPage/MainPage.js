import React, { useEffect, useState } from "react";
import 'tachyons'
import MangaList from "../MangaList/MangaList.js";
import './MainPage.css'
import MangaInfo from "../MangaInfo/MangaInfo.js";
import AddToList from "../AddToList/AddToList.js";
const MainPage = () => {
    const [search, setSearch] = useState('Naruto');
    const [mangaData, setMangaData] = useState();
    const [mangaInfo, setMangaInfo] = useState();
    const [myMangaList,setMyMangaList] = useState([]);

    const addTo = (manga) =>{
        const newArray = [...myMangaList, manga];
        setMyMangaList(newArray);
    }
    const getData = async() =>{
        const res = await fetch('https://api.jikan.moe/v4/anime?q=${search}&limit=20');
        const resData = await res.json();
        setMangaData(resData.data);
    }
    useEffect(()=>{
        getData();
    },[search])
    return (
    <div>
        <div className="header">
           <h1>MyMangaList</h1>
           <div className="search-box">
                <input type="search" placeholder="Search manga name" 
                onChange={(e)=>setSearch(e.target.value)}/>
           </div>
        </div>
        <div className="container">
            <div className="mangaInfo">
                {mangaInfo && <MangaInfo mangaInfo = {mangaInfo}/>}
            </div>
            <div className="mangaRow">
                <h2 className="text-heading">Manga</h2>
                <div className="row"><MangaList mangalist={mangaData} setMangaInfo={setMangaInfo} mangaComponent={AddToList} handleList = {(manga)=>addTo(manga)} /></div>

                <h2 className="text-heading">MyList</h2>
                <div className="row"><MangaList mangalist={myMangaList} setMangaInfo={setMangaInfo} mangaComponent={AddToList} handleList = {(manga)=>addTo(manga)} /></div>
            </div>

        </div>
    </div>
    )
}
export default MainPage;