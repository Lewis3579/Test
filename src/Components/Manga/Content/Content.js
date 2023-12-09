import React from "react";
import 'tachyons';
import { Outlet } from "react-router-dom";
import Chapter from "../Chapter/Chapter";
class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            current: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/content')
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            this.setState({current:data})
        })
    }
    render(){
        const currents = this.state.current
        const chaptercomponent = currents.map((current,i) =>{
            return (
                <div >
                    <Chapter key={currents[i].manga_id} manga_id={currents[i].manga_id} title = {currents[i].title} chapter_id = {currents[i].chapter_id} chapter ={currents[i].chapter} />
                </div>
            )
        })
        return(
            <div>
                {chaptercomponent}
                <Outlet/>
            </div>
        )
    }
}

export default Content;