import React from "react";
import 'tachyons';
import MangaList from "../MangaList/MangaList";
import Search from "../Search/Search";
import Scroll from "../../Scroll/Scroll";
class FrontPage extends React.Component{
    constructor(){
        super();
        this.state={
            mangas:[],
            searchfield : ''
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
    onSearch = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const info = this.state.mangas.filter(mangas =>{
            return mangas.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.mangas===0){
            return(<h1>Loading</h1>)
        }
        else{
            return(
                <>
                    <div className="tc">                        
                        <Search searchChange={this.onSearch}/>
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