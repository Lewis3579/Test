import React from "react";
import 'tachyons';

import { NavLink } from "react-router-dom";
class Chapter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chapter:[]            
        }
    }
    onRead = () =>{
        fetch("http://localhost:3000/chapter", {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                chapter_id: this.props.chapter_id
            })
        })

    }
    render(){
        return(
            <div>
                <div>
                    <NavLink onClick={this.onRead} to="/content/image"><h1>{this.props.chapter}</h1></NavLink>
                </div>
            </div>
        )
    }
}
export default Chapter;