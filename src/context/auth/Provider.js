import authContext  from "./index"
import axios from 'axios';
import { useCookies } from 'react-cookie';

import env from "react-dotenv";

export default function AuthProvider({children}){
    const [cookies, setCookie, removeCookie] = useCookies([]);
    
    const checkAuth = async () => {
        console.log("cookies: ", cookies)
        if(!cookies.jwt)
            return false
        else {
            const { data } = await axios.post(
                `${env.API_URL}/auth/checkUser`,
                {},
                {withCredentials:true}
            );
            if(!data.status){
                console.log("wrong cookies")
                removeCookie("jwt");
                return false
            } else
                return true
        }
    };

    const logOut = () => {
        removeCookie("jwt")
        return true;
    };

    return(
        <authContext.Provider value={ {
            checkAuth,
            logOut
        }}>
            {children}
        </authContext.Provider>
    );
}
