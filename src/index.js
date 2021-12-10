import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import Home from './Home';
import SpecificRecipe from './SpecificRecipe';
import logo from './recipelogo.jpeg'; 
import Search from './Search';

class Navbar extends React.Component{
  render(){
    return <BrowserRouter>
    <div id="navbar">
      <span><Link to="/">Recipes</Link></span>
      {/* <span><Link to="/fav">My Favorites</Link></span> */}
      </div>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/search" component={Search}></Route>
        {/* <Route path="/recipes" component={Recipes}></Route> */}
        <Route path="/specificrecipe" component={SpecificRecipe}></Route> 
      </Switch>
    </BrowserRouter>
  }
}

ReactDOM.render(
< Navbar/>,
  document.getElementById('main')
);


