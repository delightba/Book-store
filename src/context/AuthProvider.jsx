import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/Firebase.config'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState()

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //sign in with goggle
    const signInWithGoogle=()=>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

   // Logout
    const logout=()=>{
      signOut(auth)
      setUser(null)
    }
   // login
    const login=(email,password)=>{
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      //console.log(currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      return unsubscribe
    }
      
  },[])

  const authInfo = {
    createUser,
    user,
    signInWithGoogle,
    loading,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider