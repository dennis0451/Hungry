import axios from 'axios'
import { Link } from 'react-router-dom'
import Food from '../components/Food'
import Welcome from '../components/Welcome'
// import Navbar from '../components/Navbar'

function HomePage(props){
    let userOnline = props.user

    // function test2(){
    //     axios.post('/test_two',)
    //     .then((response) => {
    //         console.log('response from server: ', response)
    //     })
        
    // }

    console.log(`homepage user : ${userOnline != undefined}`)
    return (
        <div>

            <h1>Hungry Home Page</h1>
            {userOnline !=undefined && <Welcome />}
            {userOnline != undefined && <Food />}
            {(userOnline == undefined) && <Link to="/login"><button>Log In</button></Link>}
            {(userOnline == undefined) && <Link to="/signup"><button>Sign Up</button></Link>}
            {(userOnline != undefined) && <Link to="/userpage"><button>View Cookbook</button></Link>}
        


        </div>
    )
}

export default HomePage