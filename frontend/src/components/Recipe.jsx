import axios from 'axios'


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

    //mapped over ingredients array to create new array of li items
    let ingredients = props.items.map(item =>
        <li>{item}</li>
    )
    return(
        <div className="card">
            <img src={props.image} alt="" />
            <div className="card--stats">
                {/* render other button */}
            <button onClick={addFavorite}>save to favorites</button>
            <p>{props.label}</p>
            </div>
            <p>{props.url}</p>
            <p>{props.source}</p>
            <p>other ingredients:</p>
            {ingredients}
        </div>
    )
}

export default Recipe


// image={item.recipe.image} ingredients={item.recipe.ingredientLines} directions={item.recipe.url} source={item.recipe.source} 