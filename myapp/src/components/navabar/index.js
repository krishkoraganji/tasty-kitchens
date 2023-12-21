import logo from '../images/Frame 276.png'
import './index.css'
import {AiOutlineMenu} from 'react-icons/ai'
function Navbar() {
  return (
    <div className='navbar'> 
    <div className='logo'>
    <img src={logo} alt='logo'/>
    <h1>Tasty Kitchens</h1>
    </div>
    <AiOutlineMenu className='menu-button'/>
    
    </div>
  )
}
export default Navbar