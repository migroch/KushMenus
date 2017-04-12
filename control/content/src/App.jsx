// App.jsx
// Entry React component holding all other components

import React, { Component } from 'react';
import AddItemForm from './AddItemForm';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {   // Entry App component

  handleReset(event) {  // onClick of reset button 
    buildfire.datastore.search( {} , 'MenuItem', function(err,records){  
      if(err)
        console.log('there was a problem retrieving your data');
      else if ( records.length == 0)
        console.log('no records found');
      else{
        records.map( (rec) =>{ 
          buildfire.datastore.delete(rec.id, 'MenuItem', function(err, status){
            if(err)
              console.log('there was a problem deleteing your data');
            else
              console.log( 'record ' + rec.id +' deleted');
          });
	});
      }
    });
  }
  
  render() {
    return (
      <div className="container App">
        <div className="container-fluid App-header">
          <h2 className="App-name">
	    <span><img src="https://kushmoda.com/wp-content/uploads/2014/09/cropped-Copy-of-Kushmoda-Icon-150x150.png" className="App-logo" alt="logo" /></span>KushMenus
	  </h2>
	  <h3 className="App-intro">Use the form below to add items to your KushMenu</h3>	
        </div>
	<hr/>
	<AddItemForm />
	<hr/>
	<span><h4>
	  <button type="button" className="btn btn-danger reset-button" onClick={this.handleReset}>
	    Reset</button>
	  Delete all items!</h4></span>
      </div>
    );
  }
}

export default App;
