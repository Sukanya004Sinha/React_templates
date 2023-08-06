import { useState,useEffect } from "react";
import {restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
    
 function filterData(searchText, restaurants) {
 const filterData = restaurants.filter((restaurant) => 
  restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;

 }
 export const Body = () => {
  // fetch("")
  //let searchTxt = "KFC"
  //searchText is a local state variable
  //const [searchInput,setSearchInput] = useState("KFC");// To create state variables
  //or we can write like that 
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const searchVar = useState("");
  const [searchText, setSearchText] = searchVar;
  //const [searchClicked,setSearchClicked] = useState("false");
  // empty dependency array => once after render + every time after render when search Text changes
 // dependency array [searchText] => once after initial render 
  useEffect (() => {
    //console.log("render");
    console.log(useEffect);
    console.log("call this when dependency is changed");
    //fetch ("");
    
   getRestaurants();
    },[]);
    // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9722535&lng=77.6632765&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
        console.log(json);
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data)
     // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }
    console.log("render");
    // not render component( Early return)
    if(!allRestaurants) return null;
    if( filteredRestaurants?. length === 0 ) return <h1>No Restaurants Match Your Filter!!</h1>
    // if restaurant is empty => Shimmer UI 
    // if restaurant has data => actual data ui
  return  allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
     <> 
     <div className="search-container">
     <input type="text" 
     className="search-input" 
     placeholder="Search" 
     value={searchText}
     onChange={(e)=> {
     e.targetValue //=> whatever you write in input
      setSearchText(e.target.value);
     }}
     />
     <button className="search-btn" onClick={()=>{
      // if(searchClicked ==="true") {
      // setSearchClicked("false")
      // }
      // else{
      //   setSearchClicked("true");
      // }
      // Need to filter the data 
       const data =  filterData(searchText, allRestaurants);
         setFilteredRestaurants(data);
      }}>
     Search
     </button>
     </div>
        <div className="restaurant-list">
       {/* you have to write a logic for No restaurant found here */}
        {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} />
        );

          })}
        
     
        </div>
        </>
    );
};
export default Body;