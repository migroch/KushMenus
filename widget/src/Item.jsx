// Item.jsx
// Item card coponent

import React, { Component } from 'react';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.css';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.itemData
     return (
       <li>
	 <div className="container-fluid Item-card wpdshortcode wpd-flowers">
	   <a href="https://www.kushmoda.com">
	     <img src={item.imageUrl} alt="Menu - Flower"/></a>
	     <p><strong>
	       <a href="https://www.kushmoda.com">
		 <span className="entry-title-primary">{item.name}</span>
	       <span className="entry-subtitle">{item.description}</span></a>
	     </strong></p>
	     <span className="wpd-productinfo"><strong>Price:</strong>{item.price}</span>
	 </div>
       </li>
    )
  }
}

export default Item;
