import axios from 'axios'
import { Link } from 'react-router-dom'
import Food from '../components/Food'
// import Navbar from '../components/Navbar'

function HomePage(props){
    let userOnline = props.user

    console.log(`homepage user : ${userOnline != undefined}`)
    return (
        <div>

            <h1>Hungry Home Page</h1>
            <Food />
            {(userOnline == undefined) && <Link to="/login"><button>Log In</button></Link>}
            {(userOnline == undefined) && <Link to="/signup"><button>Sign Up</button></Link>}
            {(userOnline != undefined) && <Link to="/userpage"><button>View Cookbook</button></Link>}
        


        </div>
    )
}

export default HomePage