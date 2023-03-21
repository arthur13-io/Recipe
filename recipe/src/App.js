import React from "react";
import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () =>{

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Chicken');
  const apiKey= "80a84d189d698cfa867497ac748aa40c";
  const apiId= "9f9b3e9b";
  const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`;

  const searchRecipe = async() =>{
    const response = await fetch(apiUrl);
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits)
  }

  useEffect(()=>{
    searchRecipe();
  }, [query]);

  function updateSearch(e){
    setSearch(e.target.value);
  }

  function getRecipe(e){
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }


  return(
    <div className="App">

      <form className="search-Recipe" onSubmit={getRecipe}>
        <input type="text" className="search-box" value={search} onChange={updateSearch}/>
        <button className="primary-btn" type="submit">Search</button>
      </form>
      <div className="recipe">
      {
        recipe.map(recipe => (
          <Recipe recipe={recipe.recipe} key={recipe.recipe.label}/>
        ))
      }
    </div>
    </div>
  )
}

export default App;