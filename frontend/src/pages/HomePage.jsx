import axios from 'axios'
import { Link } from 'react-router-dom'
import Food from '../components/Food'
import Welcome from '../components/Welcome'
import FirstPage from '../components/FirstPage'
import Button from 'react-bootstrap/Button';


// import Navbar from '../components/Navbar'

function HomePage(props){
    let userOnline = props.user



    console.log(`homepage user : ${userOnline != undefined}`)
    return (
        <div>
            <div className='start'>
            <div className='log--in'>
            {(userOnline == undefined) && <FirstPage />}
            </div>

            <div className='log--out'>      
            {(userOnline == undefined) && <Link to="/login"><Button variant="outline-primary" size='lg'>Log In</Button></Link>}
            {(userOnline == undefined) && <Link to="/signup"><Button variant="outline-success" size='lg'>Sign Up</Button></Link>}
            </div>

            </div>

            {/* <div className='carousel'> */}
            {/* {userOnline !=undefined && <Welcome />} */}
                
            {/* </div> */}
            {userOnline != undefined && <Food />}
            {/* {(userOnline != undefined) && <Link to="/userpage"><button>View Cookbook</button></Link>} */}
        


        </div>
    )
}

export default HomePage