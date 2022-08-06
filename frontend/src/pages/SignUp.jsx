import axios from 'axios';

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
        console.log('signed up and opens app')

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
        </div>
    )
}

export default SignUp