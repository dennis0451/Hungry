import { Link } from 'react-router-dom'
function HomePage(){
    return (
        <div>
            <h1>Hungry Home Page</h1>
            <Link to="/login"><button>Log In</button></Link>
            <Link to="/signup"><button>Log Out</button></Link>
        </div>
    )
}

export default HomePage