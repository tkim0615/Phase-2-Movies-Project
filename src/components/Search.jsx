import React from "react";

function Search(){

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Movie:</label>
            <input
                type="text"
                id="search"
                placeholder="Type movie title to search..."
            />
        </div>

    )
}

export default Search