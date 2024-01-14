import React, {useState} from "react";
import axios from "axios";
import 'tachyons';

const UploadImage = () =>{
    const [image,setImage] = useState(null);
    const fileUpload = (event)=>{
        const formData = new FormData();
        
        for(let i = 0; i < event.target.files.length; i++ ){
            formData.append('myimage',event.target.files[i],event.target.files[i].name)
        }
        
        setImage(formData);
    }
    const postImage=()=>{
        axios.post("http://localhost:3000/uploadimage",image)
        alert("Da tai anh thanh cong")
    }
    return(
        <div>
            <form>
                <div>
                    <h3>Chon anh bia</h3>
                    <input onChange={fileUpload} type="file" multiple/>
                    <input onClick={postImage} type="submit" value="Tai anh" />
                </div>

            </form>
        </div>
    )
}
export default UploadImage;