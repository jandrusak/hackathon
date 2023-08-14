import React, { useState } from 'react';

const SearchForm = ({ onFilter }) => {
//onFilter needs to be a function defined in App component
    const [searchData, setSearchData] = useState("");

    const handleInputChange = (e) => {
        setSearchData(e.target.value)
        }

    const handleSearch = () => {
        onFilter(searchData)
    };
    console.log(searchData)
    return (
        <div>
            <input
                type="text"
                name="tag"
                placeholder="tag..."
                value={searchData}
                onChange={handleInputChange}
                >
            </input>
            <button onClick={handleSearch}>Search</button>
        </div>
    )


}

export default SearchForm