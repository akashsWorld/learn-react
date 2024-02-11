import React,{useState,useEffect} from "react";


const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},
    onLogin:(email, password)=>{}
})

export const AuthContextProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*
  Only this implementation works to get the login information but it cause an infinite loop,
 because under the if condition the state variable changed so the component again render again and again.
 
 */

  // const userLoggedInInformation = localStorage.getItem("isLoggedin");
  // if (userLoggedInInformation === "1") {
  //   console.log("Hello");
  //   setIsLoggedIn(true);
  // }

  // To avoid the infinite loop useEffect hook is used.

  useEffect(() => {
    // Thic anonymous functio only runs first time after the component fully rendered.
    // But when the state variable change the component again render but this time this code block will not exexute.
    // Because this hook execute the anonymous function only first time rendering the component and the change of the variables defined in dependencies array.
    const userLoggedInInformation = localStorage.getItem("isLoggedin");
    if (userLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedin", "1");
  };

  // For the current situation every time refresh the application the application start from fresh not gettong the loggedin state.

  // But to maintain the state we can store the state of the application in local storage.

  const logoutHandler = () => {
    localStorage.setItem("isLoggedin", "0");
    setIsLoggedIn(false);
  };

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            onLogout:logoutHandler,
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    ) ;
}


export default AuthContext;