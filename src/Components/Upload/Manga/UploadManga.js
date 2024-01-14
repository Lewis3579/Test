import React, {useState} from "react";
import axios from "axios";
import 'tachyons';

const UploadManga = () =>{
    const [title,setTitle] = useState('');
    const [cover,setCover] = useState(null);
    const fileUpload = (event)=>{
        const formData = new FormData(); 
        formData.append('myfile', event.target.files[0], event.target.files[0].name);
        setCover(formData);
        console.log(cover);
    }
    const postCover=()=>{
        axios.post("http://localhost:3000/uploadmanga",cover)
        alert("Da tao anh bia thanh cong")
    }
    const postTitle=()=>{
        axios.post("http://localhost:3000/uploadmangatitle",{
            title: title
        });
        alert("Da tao thu muc thanh cong");
    }
    return(
        <div>
            <form>
                <div>
                    <h3>Nhap ten truyen</h3>
                    <input onChange={(event) => setTitle(event.target.value)} type="text"/>
                    <h3 onClick={postTitle} >Tao truyen</h3>
                </div>
                <div>
                    <h3>Chon anh bia</h3>
                    <input onChange={fileUpload} type="file"/>
                    <input onClick={postCover} type="submit" value="Tai anh" />
                </div>

            </form>
        </div>
    )
}
export default UploadManga;