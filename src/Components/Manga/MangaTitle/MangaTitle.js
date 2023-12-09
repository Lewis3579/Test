import React from "react";
import { NavLink } from "react-router-dom";
import 'tachyons';
import './MangaTitle.css'

class MangaTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            manga:[]            
        }
    }
    
    onRead = () =>{
        fetch("http://localhost:3000/mangatitle", {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                manga_id: this.props.manga_id
            })
        })
    }
    render(){
        return(
            <div className="bg-mid-gray dib br3 pa3 ma2 shadow-5">
                <div>
                    <img className="title" src={`${this.props.cover}`} alt="..."/>
                    <div>
                        <NavLink onClick={this.onRead} to="/content"><h1>{this.props.title}</h1></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default MangaTitle;