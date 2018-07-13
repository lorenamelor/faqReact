import React from 'react';
import GroupCategory from './GroupCategory';
import SearchBar from './SearchBar';
import Modal from './Modal';


class Content extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        showModal: false
      }
    }
    
    render(){
        const closeModal = () => this.setState({ showModal: false });

    return(
        <div className="container">
            <div className="header">         
                <h1 className="helpTitle">Como podemos ajudá-lo?</h1>
                <SearchBar searchTerm={this.props.searchTerm} handleSearchTerm={this.props.handleSearchTerm}/>                                            
            </div>

            <div className="col-md-12">
                <div className="addButtons">
                    <button type="button" className="btn btn-primary" onClick={() => this.setState({ showModal: true })}>Nova Categoria</button>
                    <button type="button" className="btn btn-info">Nova Pergunta</button> 
                </div> 
            </div>                    
            <GroupCategory/>   
            <Modal show={this.state.showModal} onHide={closeModal}/>
        </div>
    )
}
}

export default Content;