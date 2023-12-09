import React from "react";
import 'tachyons'

class Image extends React.Component{
    constructor(){
        super();
        this.state = {
            current: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/image')
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
                    <img src={`../Manga/${currents[i].title}/${currents[i].chapter}/${currents[i].pic}`} alt="  "/>
                </div>
            )
        })
        return(
            <div>
                {chaptercomponent}
            </div>
        )
    }
}
export default Image;