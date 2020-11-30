import React, { Component } from 'react'

const SearchBox = (props) => {

    return (
        <div className="search-box">
            <h3>Search</h3>
            <input type="text" placeholder={props.placeholder} onChange={props.handleChange} />
        </div>


    )

}
export default SearchBox;