import axios from "axios"
import { useEffect, useState } from "react"

function UserPage(){
    let book
    const[cookbook, setCookbook] = useState([])

    useEffect(() => {
        axios.get('/cookbook')
        .then(response => setCookbook(response.data))
    },[])

    
    // let example = cookbook.map(item =>{
    //     <li>{item.fields.label}</li>
    // })


    return(
        <div>

            <li>favorites</li>
        </div>
    )
}

export default UserPage