// AddItemForm.jsx
// Add item to the kushMenu and store it in the datastore
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemObj from './ItemObj';

// Form component to add items
class AddItemForm extends Component { 
  constructor(props) {
    super(props);
    this.state = ItemObj;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) { // Update state on input 
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;
     this.setState({
      [id]: value
    });
  }

  handleImageUpload(event){ // Set imageUrl 
    buildfire.imageLib.showDialog({}, (err, result)=>{
      this.setState({
	imageUrl: result.selectedFiles[0]
	});
    });  
    event.preventDefault();
  }
  
  handleSubmit(event) { // Store imput on datastore on suubmit
    buildfire.datastore.insert(this.state, 'MenuItem', false, (err, result) =>{
      if(err)
	alert(err);
      else
	console.log('Menu item ' + this.state.name + ' was added succesfully!');
    });
    event.preventDefault();
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>

	<div className="form-group">
	  <label htmlFor="name">Name</label>
	  <input id="name" className="form-control"
		 placeholder="KushModa Haze"
		 type="text" 
		 value={this.state.name}
		 onChange={this.handleInputChange}	/>
	</div>

	<div className="form-group">
	  <label htmlFor="description">Description</label>
	  <input id="description" className="form-control"
		 placeholder="Happy highs!"
		 type="text" 
		 value={this.state.description}
		 onChange={this.handleInputChange}	  />
	</div>

	<div className="form-group">
	  <label htmlFor="category">Category</label>
	  <input id="category" className="form-control"
		 placeholder="Hybrid"
		 type="text" 
		 value={this.state.category}
		 onChange={this.handleInputChange}	  />
	</div>

	<div className="form-group">
	  <label htmlFor="price">Price</label>
	  <input id="price" className="form-control"
		 placeholder="$15 - $320"
		 type="text" 
		 value={this.state.price}
		 onChange={this.handleInputChange}	  />
	</div>

	<div className="form-group">
	  <label htmlFor="imageUpload">Image</label>
	  <input id="imageUpload"
		 type="file"
		 onClick={this.handleImageUpload}      />
	</div>
	<div className="form-group">
	  <input id="imageUrl" className="form-control"
		 placeholder="http://some.domain.com/image"
		 type="url" 
		 value={this.state.imageUrl}
		 onChange={this.handleInputChange}	  />
	  <p className="help-block">Upload an image file or type a link to one.</p>
	</div>

	<button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default AddItemForm;
