// ItemList.jsx
// Menu coponent
import React, { Component } from 'react';
import Item from './Item';

import './ItemList.css';
import 'bootstrap/dist/css/bootstrap.css';

class ItemList extends Component {
  constructor(props){
    super(props);
    this.genList = this.genList.bind(this);
   }

  genList(){ // Generate list from list data
    return this.props.listData.result.map((item) =>
      <Item  key={item.id} itemData={item.data} /> );
  }
  
  render() {
    return (
      <div className="container ItemList" >
	<ul>
	  {this.genList()}
	</ul>
      </div>
    )
  }
}

export default ItemList;
