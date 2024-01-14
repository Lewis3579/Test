import React from "react";
import 'tachyons';
import FavouriteList from "../FavouriteList/FavouriteList"
import Scroll from "../../Scroll/Scroll";
class Favourite extends React.Component{
    constructor(){
        super();
        this.state={
            mangas:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/favourite",{
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
                        <Scroll>
                            <FavouriteList mangas = {info}/>
                        </Scroll>
                    </div>
                    
                </>
            )
        }
    }
}
export default Favourite;