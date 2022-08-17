import axios from 'axios';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
            .then(window.location.reload())

    }
    return (
        <div className='sign--up'>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="username" name='email' />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="password" name='password' />
                </Form.Group>
                <Button variant="outline-primary" type="submit" size='md'>
                    Sign up
                </Button>
            </Form>


            <Link to="/"><Button variant="outline-success" size='md'>Return home</Button></Link>

        </div>
    )
}

export default SignUp