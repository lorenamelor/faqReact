import React from 'react';
import GroupCategory from './GroupCategory';
import SearchBar from './SearchBar';

const Content = (props) =>{
    return(
        <div className="container">
            <div className="header">         
                <h1 className="helpTitle">Como podemos ajudá-lo?</h1>
                <SearchBar searchTerm={props.searchTerm} handleSearchTerm={props.handleSearchTerm}/>                                            
            </div>

            <div className="col-md-12">
                <div className="addButtons">
                    <button type="button" className="btn btn-primary">Nova Categoria</button>
                    <button type="button" className="btn btn-info">Nova Pergunta</button> 
                </div> 
            </div>
                      
            <GroupCategory/>   
        </div>
    )
}

export default Content;