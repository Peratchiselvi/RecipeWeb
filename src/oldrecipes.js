import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

function IteminList(props){
    console.log(props.recipe);
    return <div className="recipeCard">
        {/* <div className="vegContainer">{props.recipe.vegan && <div className="veg">Veg</div>}{props.recipe.vegan==false && <div className="nonveg">Non-Veg</div>}</div> */}
        <div id="imgContainer"><img src={props.recipe.image}/> </div>           
    {/* <div style={{color: "#2e3447",position: "absolute",right: "10px",top: "10px"}}><i className="fa fa-heart-o"></i></div> */}
    {/* <div className="recipeCardDetail">
        <div style={{float: "left",marginLeft: "15px",marginTop: "-45px",display: "flex",flexDirection: "column"}}><i className="fa fa-clock-o" style={{color:  "#f77e0c",margin:"5px 0px"}} />{props.recipe.readyInMinutes} Minutes</div>
        <div style={{float: "right",marginRight: "15px",marginTop: "-45px",display: "flex",flexDirection: "column"}}><i className="fa fa-spoon" style={{color:  "#f77e0c",margin:"5px 0px"}} />{props.recipe.servings} Servings</div></div>
        <div className="recipeCardDetailDown"><h4>{props.recipe.title}</h4>
        </div> */}
        </div>
}

function Recipes() {
    const [recipesArray, setRecipes] = useState([]);
    useEffect(() => {
    const axiosreq = async () => {
      const response = await axios("http://localhost:8080/recipes");
      setRecipes(response.data.recipes);
    }
    axiosreq();
  }, []);
  console.log(recipesArray);
  console.log(Array.isArray(recipesArray));  
    return <div id="rec">
        <div id="recipeHeader">
            <div id="recipeHeading">Recipes</div>
            <div id="searchBar" style={{position: "relative"}}><i alt="Add to Favorites" className="fa fa-search" style={{marginRright: "-25px",overflow: "visible",position: "absolute",zIndex: "2",marginTp: "5px",paddingLeft: "8px",opacity: "0.4"}} /><input type="search" style={{padding: "5px 10px",paddingLeft: "23px",opacity: "0.1",border: "none",borderRadius: "8px"}} /></div>
        </div>
            <div id="recipeList">
                {console.log(recipesArray.length)}
            {recipesArray.length>0 && recipesArray.map((recipeitem) => {
                return <IteminList recipe={recipeitem} />;
            })}
        </div>
        </div>
}

export default Recipes;

// {console.log(recipes)}
// {function ItemReturns(){
//     return recipes.length>0 && recipes.map(recipeitem => {
//  return <IteminList recipe={recipeitem} />;
// });
// }
// }
// <ItemReturns />