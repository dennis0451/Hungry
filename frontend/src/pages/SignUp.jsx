import axios from 'axios';
import { Link } from 'react-router-dom'


function SignUp() {

    function handleSignUp(event) {

        //axios request to create user with crrdentials from input
        event.preventDefault()
        const emailInput = event.target.email.value
        const passwordInput = event.target.password.value
        axios.post('/signup', { email: emailInput, password: passwordInput })
            .then((response) => {
                console.log('response from server: ', response)
            })

    }
    return (
        <div>
            <h1>Sign-Up Page</h1>
            <form onSubmit={handleSignUp}>
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
}

export default SignUp