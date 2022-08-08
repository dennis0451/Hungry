import axios from 'axios'
import { useState } from 'react'
import Recipe from './Recipe'

function Food(){

    const[foodData, setFoodData] = useState([])

    function apiTest(event){
        event.preventDefault()
        let food = event.target.food.value
        // console.log(food)
        axios.post('/test',{food:food})
        .then(response => setFoodData(response.data.hits))
    }
    console.log(foodData)
    const recipes = foodData.map(item => {
        // let ingredients = Object.entries(item.recipe.ingredients)
        let singleIngredients = item.recipe.ingredients.map(step => step.text)
        // console.log(singleIngredients)
        // console.log(item.recipe.ingredients)
        // console.log(ingredients)
        return <Recipe label={item.recipe.label} image={item.recipe.image} items={singleIngredients} directions={item.recipe.url} source={item.recipe.source}  />
    })



    return(
        <div>
            <form onSubmit={apiTest}>
                <input name="food" type="search" placeholder="what's in your fridge?" />
                <button type="submit">search</button>
            </form>
            {recipes}
        </div>
    )
}

export default Food