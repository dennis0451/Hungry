

function Recipe(props){

    let ingredients = props.items.map(item =>
        <li>{item}</li>
    )

    console.log(`these are ${ingredients}`)
    return(
        <div>
            <h1>{props.label}</h1>
            {ingredients}
            <li> <img src={props.image} alt="" /> </li>
            <li>{props.directions}</li>
            <li>{props.source}</li>
        </div>
    )
}

export default Recipe


// image={item.recipe.image} ingredients={item.recipe.ingredientLines} directions={item.recipe.url} source={item.recipe.source} 