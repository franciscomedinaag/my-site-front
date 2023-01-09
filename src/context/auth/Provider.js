import authContext  from "./index"
import axios from 'axios';
import { useCookies } from 'react-cookie';
import env from "react-dotenv";

export default function AuthProvider({children}){
    const [cookies, setCookie, removeCookie] = useCookies([]);
    
    const checkAuth = async () => {
      const { data } = await axios.post(
          `${env.API_URL}/auth/checkIfUserIsAuth`,
          {},
          {withCredentials:true}
      );
      if(!data.status){
          removeCookie("jwt");
          return false;
      } else
          return true;
    };

    const logIn = async (registerValues) => {
      try{
          const {data} = await axios.post(
            `${env.API_URL}/auth/login`, 
            {
              ...registerValues
            },
            {
              withCredentials: true
            }
          );
    
          if(data){
            if(data.errors){
              const {email, password} = data.errors;
              if(email) return email;
              else if(password) return password;
            } else { return "OK" }
          } else { return "No reponse from server" }
        } catch (err) {
          return "Error in request"
        }
    };

    const logOut = () => {
        removeCookie("jwt")
        return true;
    };

    return(
        <authContext.Provider value={ {
            checkAuth,
            logIn,
            logOut
        }}>
            {children}
        </authContext.Provider>
    );
}
