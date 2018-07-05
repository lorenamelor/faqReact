import '../node_modules/bootstrap3/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './custom.css'

import React, { Component } from 'react';
import Content from './components/Content'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        searchTerm: 'teste'
    }
  }

  handleSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }


  render() {
    return (
      <div>
        <Content searchTerm={this.state.searchTerm} handleSearchTerm = {this.handleSearchTerm}/>
      </div>
    );
  }
}

export default App;
