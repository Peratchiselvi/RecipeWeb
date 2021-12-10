import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
TopBarProgress.config({
  barColors:{
    '0': "#f77e0c"
  }
})
// function CheckboxCheck(id){
//   console.log(id);
//   console.log(document.getElementById("'input'+id").value);
//   // if(item.checked == true){
//   //   console.log("checked");
    
//   // }
// }
// function Ingredients(props){
//   const [checked,setChecked] = useState(false);
// return <div id="ingredient"><li style={{display: "flex"}}><div style={{position: "relative",width: "20px", top: "12px"}}><input type="checkbox" id="'input'+{props.id}" onClick={() => useState()} style={{margin: "0px 5px 0px 0px",position: "absolute",opacity: "0"}}></input><i className="fa fa-circle-o" id={props.ingredient.id} aria-hidden="true" style={{margin: "0px 5px 0px 0px",position: "absolute"}} onClick={() => CheckboxCheck(props.ingredient.id)}></i></div><div>{props.ingredient.measures.metric.amount}{props.ingredient.measures.metric.unitShort} {props.ingredient.name}
// </div></li></div>
// }
// function MethodStep(props){
//   return <div><li><h4 style={{marginBottom: "10px"}}><i className="fa fa-check-circle" aria-hidden="true" style={{margin: "0px 5px 0px 0px"}}></i>Step {props.step.number}</h4>{props.step.step}</li><br></br></div>
// }
// function Ingredients(props){
//   return <div id="ingredient"><li style={{display: "flex"}}><div style={{position: "relative",width: "20px", top: "12px"}}><input type="checkbox" style={{margin: "0px 5px 0px 0px",position: "absolute",opacity: "0"}}></input><i className="fa fa-circle-o" aria-hidden="true" style={{margin: "0px 5px 0px 0px",position: "absolute"}}></i></div><div>{props.ingredient.measures.metric.amount}{props.ingredient.measures.metric.unitShort} {props.ingredient.name}</div></li></div>
//   }
function Ingredients(props){
return <div id="ingredient"><li><i className="fa fa-check-circle" aria-hidden="true" style={{margin: "0px 5px 0px 0px"}}></i>{props.ingredient.measures.metric.amount}{props.ingredient.measures.metric.unitShort} {props.ingredient.name}</li></div>
}
function MethodStep(props){
  return <div><li><h4 style={{marginBottom: "10px"}}><i className="fa fa-check-circle" aria-hidden="true" style={{margin: "0px 5px 0px 0px"}}></i>Step {props.step.number}</h4>{props.step.step}</li><br></br></div>
}
export default function SpecificRecipe(props){
  const location = useLocation();
  const [specificRecipe,setSpecificRecipe] = useState(null);
  const [recipeid,setrecipeid] = useState(location.state.recipeId);
  console.log("inside sr");
  React.useEffect(() => { 
    console.log("id" + recipeid);
    axios.get("http://localhost:8080/specificrecipe/" + recipeid).then((response) => {
      console.log(response.data[0]);
      setSpecificRecipe(response.data[0],() => { console.log("set" + specificRecipe);});
      console.log("sr" + specificRecipe);
    });
  },[]);
  
//   console.log("id" + recipeid);
//   async function a(){
//     await axios.get("http://localhost:8080/specificrecipe/" + recipeid).then((response) => {
//     console.log(response.data[0]);
//     setSpecificRecipe(response.data[0]);
//     console.log("sr" + specificRecipe);
//   });}
//   a();
// },[]);
  console.log(specificRecipe);
  if(specificRecipe != null){
    return <div id="recipeDetails"><div id="recInRecipes">
      <div id="mainDetails">
        <div id="recipeName">
          <h6 style={{ color: "#f1bb88",marginTop: "15px" }}>Main Course</h6>
<h4 style={{ color: "white", fontSize: "xx-large",marginTop: "0px" }}>{specificRecipe.title}</h4>
          <div style={{ color: "#f1bb88",marginLeft: "25px",marginBottom: "15px" }}><i className="fa fa-heart-o"></i></div>
        </div>
        <div id="recipeImage">
          <img src={specificRecipe.image} height="270px" width="480px" style={{ borderRadius: "5%" }} />
        </div>
      </div>
      <div id="ingredients">
        <h4>Ingredients</h4>
        <ul id="ingredientList">
        {specificRecipe && specificRecipe.extendedIngredients.map((ingredient) => {
          console.log(ingredient);
          return <Ingredients ingredient={ingredient}/>
        })}
        </ul></div>
      <div id="methodContainer">
        <h6 style={{ color: "white",fontSize: "larger",margin: "15px 0px" }}>Method</h6>
        <div id="method">
          <div id="methodSteps">
            <ul id="methodList">
      {specificRecipe && specificRecipe.analyzedInstructions[0].steps.map((step) => {
          console.log(step);
          return <MethodStep step={step}/>
        })}
        </ul></div></div></div>
      </div></div>;
    }
    else{
      return <div><TopBarProgress/></div>
    }
  
}            

