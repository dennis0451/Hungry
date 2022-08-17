import axios from "axios"
import { useEffect, useState } from "react"
import SingleRecipe from "../components/SingleRecipe"

function UserPage(){

    const [saved, setSaved] = useState(true) 
    const[cookbook, setCookbook] = useState([])

    useEffect(() => {
        axios.get('/cookbook')
        .then(response => setCookbook(response.data))
    },[])

    console.log(cookbook)
    console.log(saved)

    const recipeCard = cookbook.map(item =>{

        return <SingleRecipe pk={item.pk} setCookbook={setCookbook} cookbook={cookbook} image={item.fields.image} label={item.fields.label} url={item.fields.url} savedState={saved} setSaved={setSaved}/>
    })
    // future card flip    
    // const singleImage = cookbook.map(item =>{
    //     return <img src={item.fields.image}></img>
    // })

    return(
        <div className="cards--list">
            {recipeCard}
        </div>
    )
}

export default UserPage