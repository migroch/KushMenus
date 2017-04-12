// App.jsx
// Entry React component holding all other components

import React, { Component } from 'react';
import ItemList from './ItemList';
import Nav from './Nav';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {  // Entry App component
  constructor(props){
    super(props);
    this.state = {listData:{}};
    this.getListData = this.getListData.bind(this);
  }

  // Get menu data on mount and on datastore update
  componentDidMount() { 
    this.getListData();
    buildfire.datastore.onUpdate((event) => {    
      this.getListData();
    });
  }
  
  getListData() { // get menu data from datastore 
    buildfire.datastore.search( {"recordCount":true}, 'MenuItem', (err, data) => {
      if (err) {
	console.log('there was a problem retrieving your data');
      } else {
	this.setState({listData: data});
      }
    });
  }
  
  render() {
    if (Object.keys(this.state.listData).length == 0){
      return (
	<div className="container App">
    	  <Nav />
	  {/*<p className="noItems-txt">You have no items in your KushMenu</p>*/}
	</div>);
    } else {
      return (
	<div className="container App">
    	  <Nav />
	  <ItemList  listData={this.state.listData}/>
	</div>);
    }
  }
}

export default App;
