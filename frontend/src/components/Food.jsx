import axios from 'axios'
import { useState } from 'react'
import Recipe from './Recipe'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Food() {

    const [foodData, setFoodData] = useState([])
    // add feature similar to airbnb, have a star next to card that autopoulates form and creates object saves to cookbook


    function foodRun(event) {
        event.preventDefault()
        let food = event.target.food.value
        console.log(food)
        axios.post('/food_run', { food: food })
            .then(response => setFoodData(response.data.hits))
    }

    // console.log(foodData)
    const recipes = foodData.map(item => {
        //passing in props from state/API
        return <Recipe label={item.recipe.label} image={item.recipe.image} items={item.recipe.ingredientLines} url={item.recipe.url} source={item.recipe.source} />
    })



    return (
        <div className='bootstrap--search'>
            <Form onSubmit={foodRun}>
                <Form.Group className="mb-3" >
                    <Form.Control name="food" type="search" placeholder="What's in your fridge?" />
                </Form.Group>
                <Button variant="outline-primary" type="submit" size='md'>
                    Search
                </Button>
            </Form>    

                {/* <form onSubmit={foodRun}>
                    <input name="food" type="search" placeholder="what's in your fridge?" />
                    <button type="submit">search</button>
                </form> */}
                <div className='recipe--div'>
                    {recipes}
                </div>
        </div>
    )
}

export default Food