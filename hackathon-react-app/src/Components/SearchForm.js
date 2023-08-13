import React, { useState } from 'react';

const SearchForm = ({ onFilter }) => {
//onFilter needs to be a function defined in App component
    const [searchData, setSearchData] = useState({
        tag: '', 
        date: '', 
        author: '',
        title: '', 
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSearchData((prevData) => ({
            ...prevData, 
            [name]: value, 
        }));
    };

    const handleSearch = () => {
        onFilter(searchData)
    };

    return (
        <div>
            <input>
                type="text"
                name="tag"
                placeholder="tag..."
                value={searchData.tag}
                onChange={handleInputChange}
            </input>
            <button onClick={handleSearch}>Search</button>
        </div>
    )


}

export default SearchForm