import React from "react";
import 'tachyons';
import MangaList from "../MangaList/MangaList";
import Scroll from "../../Scroll/Scroll";
class FrontPage extends React.Component{
    constructor(){
        super();
        this.state={
            mangas:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/frontpage",{
        })
        .then(response =>  response.json())
        .then(data  => {
            this.setState({mangas:data});
            console.log(this.state.mangas);
        })
    }
    
    render(){
        const info = this.state.mangas
        if(this.state.mangas===0){
            return(<h1>Loading</h1>)
        }
        else{
            return(
                <>
                    <div className="tc">
                        <h1>Mangas</h1>
                        <Scroll>
                            <MangaList mangas = {info}/>
                        </Scroll>
                    </div>
                    
                </>
            )
        }
    }
}
export default FrontPage;