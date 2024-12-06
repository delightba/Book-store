import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Spinner } from 'flowbite-react'

function PrivateRoute({childran}) {
    const {user,loading} = useContext(AuthContext)
    //const location = useLocation()

    if(loading){
        return <div className="text-center">
            <Spinner aria-label='center-aligned spinning example'></Spinner>       
             </div>
    }
    if(user){
        return childran
    }
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute
