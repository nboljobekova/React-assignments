import React from 'react';
import { Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    let navigate = useNavigate();

    const onSubmit = e => {
        e.preventDefault();
        navigate('/main');
    }

    return (
        <div className="signin">
            <Form className="signin-form" onSubmit={onSubmit} autoComplete='off'>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Введите email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" />
                </Form.Group>
                <Button type='submit' variant='success' className='w-100'>
                    Вход
                </Button>
            </Form>
        </div>
    )
}

export default Signin;