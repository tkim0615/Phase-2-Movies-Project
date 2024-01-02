import React, {useState} from "react";


function Search({searchTerm, onHandleSearchChange}){

    const handleChange =(e) =>{
        onHandleSearchChange(e)
    }

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Movie:</label>
            <input
                type="text"
                id="search"
                placeholder="Type movie title to search..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>

    )
}

export default Search