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
    render(){
        return(
            <div>
                <div>
                    <NavLink to={`/content/${this.props.chapter_id}`}><h1>{this.props.chapter}</h1></NavLink>
                </div>
            </div>
        )
    }
}
export default Chapter;