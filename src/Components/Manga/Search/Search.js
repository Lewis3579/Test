import React from "react";
const Search= ({searchChange}) => {
    return(
        <div className="pa2 bg-light-gray dib">
            <input type='search' placeholder='searachBox' onChange={searchChange}/>
        </div>
        
    );
}
export default Search;