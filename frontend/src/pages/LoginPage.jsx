import axios from 'axios';

import { Link } from 'react-router-dom'
function LoginPage(props) {
    let userOnline = props.user
    // console.log(userOnline)
    function handleLogin(event) {

        //axios request to backend to log in with credentials created on sign up
        event.preventDefault()
        console.log(`email: ${event.target.email.value} password: ${event.target.password.value}`)
        const emailInput = event.target.email.value
        const passwordInput = event.target.password.value
        axios.post('/login', { email: emailInput, password: passwordInput })
            .then((response) => {
                console.log('response from server: ', response)
                window.location.reload()

            })
    }

    if (!userOnline) {
        return (
            <div>
                <h1>Log-In Page</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder='username'
                        name='email'
                    />
                    <input
                        type="text"
                        placeholder='password'
                        name='password'
                    />
                    <button type="submit" >Log In</button>
                </form>
            <Link to="/"><button>return home</button></Link>

            </div>


        )
    }else{
        return (
            <Link to="/"><button>return home</button></Link>
        )
    }
}

export default LoginPage