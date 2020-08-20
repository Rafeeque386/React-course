import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'reactstrap';
import {NavbarBrand} from 'reactstrap';
import Menu from './Components/MenuComponent';
import {DISHES} from './shared/dishes';



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  

  }
  render(){
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/" >Ristorante Con Fusion</NavbarBrand></div>
        
      </Navbar>
      <Menu dishes={this.state.dishes} />
    
    </div>
  );
};
}

export default App;