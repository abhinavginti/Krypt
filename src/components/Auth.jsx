import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    useEffect(() =>{

    },[])
    return <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
}
