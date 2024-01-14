import React from "react";
import 'tachyons';
import { Outlet, NavLink } from "react-router-dom";
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
    deleteManga = () =>{
        fetch('http://localhost:3000/deletemanga')
        .then(response => response.json())
        .then(data =>{
            console.log(data)
        })
        alert('Manga deleted!');
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
                <div className="" style={{overflowY: 'scroll',border:'1px solid black', width:'500px'}}>
                    {chaptercomponent};
                </div>    
                <NavLink to="uploadchapter"><h1 className='white'>Upload Chapter</h1></NavLink>
                <input onClick={this.deleteManga} type="submit" value="Delete Manga"/>
                <Outlet/>
            </div>
        )
    }
}

export default Content;