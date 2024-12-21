import {useNavigate} from 'react-router-dom'
import {useAuth} from './auth'

export default function Profile() {

  const auth = useAuth()
  const navigate = useNavigate();

  const handleLogout = () => {
      auth.logout();
      navigate('/');
  }

  return (
    <>
      <div>Profile Page: {auth.user}</div>
      <button onClick={handleLogout}>logout</button>
    </>
    
  )
}
