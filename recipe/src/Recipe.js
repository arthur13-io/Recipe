import React from "react";
import style from './recipe.module.css';

const Recipe = ({recipe}) => {
    const imageNotAvailable = 'https://via.placeholder.com/400';
    return(
        <div className={style.recipe}>
            <h1>{recipe.label}</h1>
            <ol>
                {
                    recipe.ingredients.map(ingredient=>(
                      <li>{ingredient.text}</li>  
                    ))
                }
            </ol>
            
            <img src={recipe.image !== 'N/A' ? recipe.image : imageNotAvailable} alt=""  className={style.image}/>
            <p>Calories: {recipe.calories}</p>
        </div>
    )
}
export default Recipe