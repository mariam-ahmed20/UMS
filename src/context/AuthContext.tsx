import { jwtDecode } from "jwt-decode";
import { createContext, useState, type ReactNode, useEffect } from "react";

interface User {
    id: string;
    firstName: string;
    email: string;
}


interface AuthContextType {
    userData: User | null;
    saveUserData:() => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null)

interface AuthContextProviderProps {
    children: ReactNode
}


export default function AuthContextProvider({children}:AuthContextProviderProps) {
    const [userData, setUserData] = useState<User | null>(null)
    
    const saveUserData = () => {
        const encodedToken = localStorage.getItem('userToken')

        if (encodedToken) {
            const decodedToken = jwtDecode<User>(encodedToken)
            setUserData(decodedToken)
        }
    }


    const logout = () => {
        localStorage.removeItem("userToken");
        setUserData(null);
    };


    useEffect(() => {
        if (localStorage.getItem("userToken")) {
            saveUserData()
        }
    },[])

    return(
       < AuthContext.Provider value={{userData, saveUserData, logout}} >
       {children}
       </AuthContext.Provider>
    )
}