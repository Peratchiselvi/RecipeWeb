import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import {useHistory,BrowserRouter,Link} from 'react-router-dom';
import Pagination from "react-js-pagination";
import Search from './Search';
import TopBarProgress from "react-topbar-progress-indicator";
TopBarProgress.config({
  barColors:{
    '0': "#f77e0c"
  }
})


function IteminList(props){
  // const [singlerecipe, setSingleRecipe] = useState({});
  let history = useHistory();
  // React.useEffect(() => {
  //   if(recipeid != 0){
  //     console.log("loop" + count);
  //     console.log("id in use" + recipeid);
  //       const specificRecipeReq = async () => {
  //         const response = await axios("http://localhost:8080/specificrecipe/" + recipeid);
  //         setSingleRecipe(response.data[0]);
  //       }
  //       specificRecipeReq();
  //   // axios.get("http://localhost:8080/specificrecipe/" + recipeid).then((response) => {
  //   //   console.log(response.data[0]);
  //   //   setSingleRecipe(response.data[0]);
  //   //   console.log(singlerecipe);
  //   //   count += 1;
  //   // });
  //   console.log(recipeid);
  // }
  // },[recipeid]);
  function RecipeFinder(id){
    // setrecipeid(id);
    // console.log("id in rf" + recipeid);

      // React.useEffect(() => {
      //   console.log(id);
      //   // axios.get("http://localhost:8080/specificrecipe/" + id).then((response) => {
      //   //   console.log(response);
      //     setSingleRecipe(id);
      //   // });
      // }, []);
    //   useEffect(() => {
    //   const specificRecipeReq = async () => {
    //     const response = await axios("http://localhost:8080/specificrecipe/" + id);
    //     setSingleRecipe(response.data.recipes);
    //   }
    //   specificRecipeReq();
    // }, []);
      return history.push({pathname: '/specificrecipe',state: {recipeId: id}});
  }
    return <div className="recipeCard" onClick={() => RecipeFinder(props.recipe.id)}>
        {/* <div className="vegContainer">{props.recipe.vegan && <div className="veg">Veg</div>}{props.recipe.vegan==false && <div className="nonveg">Non-Veg</div>}</div> */}
        <div id="imgContainer"><img src={props.recipe.image} width="556px" height="570px" /><div style={{color: "#2e3447",position: "absolute",right: "0px",top: "0px",backgroundColor: " rgba(17, 16, 16, 0.8)",zIndex: '3',width: "40px", height: '40px'}}><i className="fa fa-heart-o" style={{color: "white",margin: '12px'}}></i></div>  </div>           
    {/* <div style={{color: "#2e3447",position: "absolute",right: "10px",top: "10px"}}><i className="fa fa-heart-o"></i></div> */}
    {/* <div className="recipeCardDetail">
        <div style={{float: "left",marginLeft: "15px",marginTop: "-45px",display: "flex",flexDirection: "column"}}><i className="fa fa-clock-o" style={{color:  "#f77e0c",margin:"5px 0px"}} />{props.recipe.readyInMinutes} Minutes</div>
        <div style={{float: "right",marginRight: "15px",marginTop: "-45px",display: "flex",flexDirection: "column"}}><i className="fa fa-spoon" style={{color:  "#f77e0c",margin:"5px 0px"}} />{props.recipe.servings} Servings</div></div>
        <div className="recipeCardDetailDown"><h4>{props.recipe.title}</h4>
        </div> */}
        <div id="recipeDetail"><h3>{props.recipe.title}</h3>
        <div style={{display: "flex"}}><i className="fa fa-clock-o" style={{color:  "#c61912",margin:"3px 5px 5px 0px"}} />{props.recipe.readyInMinutes} Minutes</div>
        <div style={{display: "flex"}}><i className="fa fa-spoon" style={{color:  "#c61912",margin:"3px 1px 5px 4px",width: "13.72px"}} />{props.recipe.servings} Servings</div></div>
        </div>
}

function Home() {
  const [recipes,setRecipes] = useState(null);
  const [recipesArray, setRecipesArray] = useState(null);
  const [activePage,setPage] = useState(0);
  const [offset,setoffset] = useState(0);
  const [perPage,setPerPage] = useState(10);
  React.useEffect(() => {
    axios.get("http://localhost:8080/recipes").then((response) => {
      setRecipes(response.data.recipes);
      console.log(recipes);
      if(recipes){ setRecipesArray(response.data.recipes.slice(offset, offset + perPage));
      console.log(recipesArray);
    }
    });
  }, []);
  function handlePageChange(pageNumber) {
    setPage(pageNumber);
    console.log((pageNumber-1) * perPage);
    console.log((pageNumber-1) * perPage + perPage);
    setRecipesArray(recipes.slice((pageNumber-1) * perPage,(pageNumber-1) * perPage + perPage));
  }
    let itemClass="page-item"
    let linkClass="page-link"
    //   axios.get("http://localhost:8080/recipes").then((response) => {
    //     setRecipes(response.data.recipes);
    //   });
    
//     useEffect(() => {
//     const randomrecipereq = async () => {
//       const response = await axios("http://localhost:8080/recipes");
//       setRecipes(response.data.recipes);
//     }
//     randomrecipereq();
//   }, []);
  console.log(recipesArray);
  console.log(Array.isArray(recipesArray));  
  if(recipesArray != null){
    return <div id="rec">
        {/* <div id="recipeofTheDay" class="recipeList">
            <div class="imgContainer"><img src={recipesArray[11].image} width="480px"/></div>
            <p>Try It</p>
        </div> */}
        {/* <div id="recipeHeader">
            <div id="recipeHeading">Recipes</div>
            <div id="searchBar" style={{position: "relative"}}><i className="fa fa-search" style={{top: "6px",overflow: "visible",position: "absolute",zIndex: "2",marginRight: "5px",paddingLeft: "8px"}} /><input type="search" style={{padding: "8px 10px",paddingLeft: "25px",border: "none",borderRadius: "8px"}} /></div>
        </div> */}
            <div class="recipeList">
                {console.log(recipesArray.length)}
            {recipesArray.length>0 && recipesArray.map((recipeitem) => {
                return <IteminList recipe={recipeitem} />;
            })}
        </div>
        <Pagination className="page"
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={50}
          pageRangeDisplayed={5}
          onChange={handlePageChange.bind(this)}
        />
        </div>}
        else{          
          return <div><TopBarProgress/></div>
        }
}


export default Home;