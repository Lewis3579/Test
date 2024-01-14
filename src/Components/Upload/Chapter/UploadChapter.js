import axios from "axios";
import React,{ useState } from "react";
import 'tachyons';

const UploadChapter = () =>{
    const [chapter,setChapter] = useState();
    const postChapter = () =>{
        axios.post("http://localhost:3000/uploadchapter",{
            chapter: chapter
        });
        alert("Da tao chuong moi thanh cong");
    }
    return(
        <div>
            <div>
            <form>
                <div>
                    <h3 className="dib">Enter chapter name: </h3>
                    <input className="dib" onChange={(event) => setChapter(event.target.value)} type="text"/>
                    <h3 className="dib underline ba pr3 bg-center" onClick={postChapter} >Create</h3>
                </div>
            </form>
        </div>
        </div>
    )
}
export default UploadChapter;