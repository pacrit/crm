import { Form, ButtonToolbar, Button } from 'rsuite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const navToHome = useNavigate();

    const handleLogin = () => {
        if (login === 'patrick' && senha === '000') {
            navToHome('/home')
        } else {
            alert('Login incorreto')
            setLogin('')
            setSenha('')
        }
    }

    const handleReset = () => {
        setLogin('')
        setSenha('')
    }

    return (
        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '100vh' }}>
            <Form>
                <Form.Group controlId="name">
                    <Form.ControlLabel>Nome de usuário</Form.ControlLabel>
                    <Form.Control required value={login} onChange={setLogin} name="name" />
                    <Form.HelpText tooltip>Campo obrigatório</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="senha">
                    <Form.ControlLabel>Senha</Form.ControlLabel>
                    <Form.Control required value={senha} onChange={setSenha} name="Senha" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={handleLogin}>Enviar</Button>
                        <Button appearance="default" onClick={handleReset}>Cancelar</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
        </div>
    )
}
export default Login;