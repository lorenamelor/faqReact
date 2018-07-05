import React from 'react';
import GroupCategory from './GroupCategory';
import SearchBar from './SearchBar';

const Content = (props) =>{
    return(
        <div>
            <h1 Style='text-align: center'>Como podemos ajudá-lo?</h1>
        <SearchBar searchTerm={props.searchTerm} handleSearchTerm={props.handleSearchTerm}/>
        <GroupCategory/>   
        </div>
    )
}

export default Content;