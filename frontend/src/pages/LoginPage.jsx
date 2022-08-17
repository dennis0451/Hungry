import axios from 'axios';

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
            <div className='log--on'>
                <Form onSubmit={handleLogin}>
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
                        Log In
                    </Button>
                </Form>
            
                <Link to="/"><Button variant="outline-success" size='md'>Return home</Button></Link>

            </div>


        )
    }else{
        return (
            <div className='home-button'>
            <Link to="/"><Button size='lg'>Return home</Button></Link>
            </div>
        )
    }
}

export default LoginPage