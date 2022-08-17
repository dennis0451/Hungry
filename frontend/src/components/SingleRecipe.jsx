import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Button from 'react-bootstrap/Button';


function singleRecipe(props){
    let image = props.image
    let label = props.label
    let url = props.url


    function removeRecipe(){
        axios.post('/delete',{url: url})
        .then(props.setCookbook(props.cookbook.filter(recipe => recipe.pk != props.pk)))
        

    }

    function viewRecipe(){
        window.open(url)
    }
    // console.log(saved)
    return(
        <div className="card"> 
        <img src={image} className="card--image" alt="" />
        <p className="food--name">{label}</p>
        {/* <h4>{url}</h4> */}
        <Button variant="primary" size="sm"onClick={viewRecipe}>View Recipe</Button>
        <Button variant="light" size="sm"onClick={removeRecipe}>Remove</Button>

        </div>

    )
}

export default singleRecipe