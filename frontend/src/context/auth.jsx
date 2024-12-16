import {createContext,useContext, useEffect, useState} from 'react'


export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [token,setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState("");

    const storeTokenInLs = (serverToken)=>{
        setToken(serverToken)
         return  localStorage.setItem("token",serverToken)
    }

    let isLoggedIn = !!token;

    const logout = ()=>{

        setToken("");
        localStorage.removeItem("token")
    }


    const userAuthentication = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/auth/user", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          if (response.ok) {
            const data = await response.json();
    
            // our main goal is to get the user data 👇
           
            setUser(data.userData);
           
          } else {
            console.error("Error fetching user data");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        userAuthentication();
      }, []);

    return(

        <AuthContext.Provider value={{storeTokenInLs,logout,isLoggedIn, user}}>
            {children}

        </AuthContext.Provider>
    )
}


export const useAuth = ()=>{

    const authContextValue = useContext(AuthContext)

    return authContextValue;
}