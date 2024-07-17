 import { createContext } from "react";

 export const userContext =createContext();

 export const UsercontextProvider =({children})=>{
    const user =[
        {
        id:1,
        name:'guru',
        role:"Developer"
    },
    {
        id:2,
        name:'sankar',
        role:"Analyst"
    },
    {
        id:3,
        name:'megan',
        role:"Developer"
    }
]
const title ="Context API";
    return(
        <userContext.Provider value={{user,title}}>
              {children}
        </userContext.Provider>
    )
 }