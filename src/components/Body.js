
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    
    const [resTaurantList,setResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch("http://localhost:5000/restaurants");
        const json = await data.json();
        //optional chaining
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(resTaurantList);
    }

    //conditional rendering
    // if(resTaurantList.length===0){
    //     return <Shimmer/>
    // }

    return resTaurantList.length===0 ? <Shimmer/> : (    
        <div className="body">
                         
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={() =>{
                        const filteredRes =  resTaurantList.filter(res => res.info.name.toLowerCase().includes({searchText}.toString().toLowerCase()));
                        setResList(filteredRes);

                    }}>Search</button>
                </div> 
                <button className="filter-btn" onClick={() => {
                  const resListFilter =  resTaurantList.filter(res =>res.info.avgRating > 4.3)
                  setResList(resListFilter);
                }}>Top Rated Restraunts</button>
            </div>
            <div className="restraunt-container">
                 {resTaurantList.map((object, i) => (<RestrauntCard obj={object} key={object.info.id} />))}
                {/* <RestrauntCard resName="Meghna Foods" cusineName="Biryani, North Indian, Asian"/>
                <RestrauntCard resName="KFC" cusineName="Crispy Chicken, Chicken Wings,Burger"/> */}
                
            </div>
        </div>
    )
}

export default Body;