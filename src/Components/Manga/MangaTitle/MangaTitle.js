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
    addFavourite = () =>{
        fetch("http://localhost:3000/add", {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                manga_id: this.props.manga_id
            })
        })
        alert(`Da them ${this.props.title} vao muc ua thich!`)
    }
    render(){
        return(
            <div className="bg-mid-gray dib br3 pa3 ma2 shadow-5">
                <div>
                    <img className="title" src={`${this.props.cover}`} alt="..."/>
                    <div>
                        <NavLink onClick={this.onRead} to="/content"><h1>{this.props.title}</h1></NavLink>
                        <h2 className="pointer" onClick={this.addFavourite}>Add to list</h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default MangaTitle;