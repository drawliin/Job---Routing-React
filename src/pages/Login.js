import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from './auth'

const Login = () => {

    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.login(user);
        navigate('/', {replace:true});
    }

    return (
        <div>
            <label>
                Username: <input type='text' onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;