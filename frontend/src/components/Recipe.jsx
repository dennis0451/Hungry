import axios from 'axios'
import Button from 'react-bootstrap/Button';


function Recipe(props){

    function addFavorite(){
        let label  = props.label
// , image:props.image, url:props.url
    // console.log(props.label, props.url, props.source)
    axios.post(
            '/favorite',
            { 'label' : props.label,
            'image' : props.image,
            'url':props.url,   
         }
            )
            .then(response => console.log('added to favorites'))
            
        }
    
    function openRecipe(){
        window.open(props.url)
    }
    //mapped over ingredients array to create new array of li items
    // let ingredients = props.items.map(item =>
    //     <li>{item}</li>
    // )
    return(
        <div className="card"> 
        <img src={props.image} className="card--image" alt="" />
        <p>{props.label}</p>
        <Button variant="primary" size="sm"onClick={openRecipe}>View Recipe</Button>    
        <button onClick={addFavorite}>save to favorites</button>
            {/* <p>{props.source}</p> */}
            {/* <p>other ingredients:</p>
            {ingredients} */}
        </div>
    )
}

export default Recipe


// image={item.recipe.image} ingredients={item.recipe.ingredientLines} directions={item.recipe.url} source={item.recipe.source} 