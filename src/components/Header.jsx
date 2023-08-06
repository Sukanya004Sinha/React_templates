import { useEffect, useState } from "react";

const loggedInUser =() =>{
    // API call to check authentication 
    return true;
}
export const Title =()=>(
    <a href="/">
    <img 
    className="logo"
    alt="logo"
    src = "https://ih1.redbubble.net/image.958001339.9393/raf,750x1000,075,t,FFFFFF:97ab1c12de.jpg"/>
    </a>
    );

    

 export const Header = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
console.log("useEffect");
    }, [isLoggedIn]);
        return(
    
            <div className = "header">
            <Title/>
            <div className="nav-items">
            
            <ul>
            <li>Home</li>
            <li>About </li>
            <li>Contact</li>
            <li>Cart</li>
            </ul>
            </div>
            {
                //JS Expressions & Statements
              //  ((a= 10 ), console.log(a))
              isLoggedIn ? (

              
                <button onClick={()=> setIsLoggedIn (false)}>Logout</button>
              ): (
                <button onClick = {() => setIsLoggedIn(true)}>Login</button>
                )}
                </div>
        );
    };
    
    export default Header;