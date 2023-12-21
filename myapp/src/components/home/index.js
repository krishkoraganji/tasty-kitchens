import {useNavigate} from 'react-router-dom'
import Navbar from '../navabar';
import MyComponent from '../slideshow';
import './index.css'
function Home() {
    const navigation=useNavigate()
  return (
    <div className='home'>
    <Navbar/>
    <div >
    <MyComponent/>
    <h1>Home</h1>
    <button onClick={()=>{navigation('/login');
                            localStorage.removeItem('jwtToken')}}>LogOut</button>
    </div>
    </div>
  )
}
export default Home