import { Route } from "react-router-dom"
import {useHistory} from 'react-router-dom'
function protectedroute(props) {
    const jwt_token=localStorage.getItem(jwtToken)
    const history=useHistory()
  return 
    if (jwt_token!==undefined){
        return <Route path={...props}/>
    }
    else{
        history.push('/login')
    }
  
}
export default protectedroute