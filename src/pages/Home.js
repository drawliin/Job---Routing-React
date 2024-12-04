import {useNavigate} from 'react-router-dom'
export default function Home(){

    const navigate = useNavigate();

    return(
        <div className='home'>
            <h2>Welcome to home page</h2>
            <button onClick={() => navigate('/ordersummary')}>Please Order Now</button>
            
            
        </div>
    )
}