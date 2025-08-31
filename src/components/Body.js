
import RestrauntCard from "./RestrauntCard";

import { useState, useEffect } from "react";

const Body = () => {
    let [resList,setResList] = useState([]);
    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch("http://localhost:5000/restaurants");
        const json = await data.json();
        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(json.data.cards[1]);
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                  const resListFilter =  resList.filter(res =>res.info.avgRating > 4.3)
                  setResList(resListFilter);
                }}>Top Rated Restraunts</button>
            </div>
            <div className="restraunt-container">
                 {resList.map((object, i) => (<RestrauntCard obj={object} key={object.info.id} />))}
                {/* <RestrauntCard resName="Meghna Foods" cusineName="Biryani, North Indian, Asian"/>
                <RestrauntCard resName="KFC" cusineName="Crispy Chicken, Chicken Wings,Burger"/> */}
                
            </div>
        </div>
    )
}

export default Body;