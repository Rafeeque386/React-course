import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'reactstrap';
import {NavbarBrand} from 'reactstrap';
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import Home from './HomeComponent';
import {Route,Switch,Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';





class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
      
    };
}
   

  render(){
    const HomePage= ()=>{
      return(
        <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      )
    }
  return (
    
<div>
  <Header/>
     <Switch>
      <Route path='/Home' component={HomePage}/>
      <Route exact path="/Menu" component={() => <Menu dishes={this.state.dishes} />} />
      <Route exact path='/contactus' component={Contact} />
      <Redirect to='/Home' />
   </Switch>
   <Footer/>
    </div>
  );
};
}

export default Main;
