
import RestrauntCard from "./RestrauntCard";
import Cards from "../utils/mockData"

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input></input> <button>Search</button>
            </div>
            <div className="restraunt-container">
                 {Cards.map((object, i) => (<RestrauntCard obj={object} key={object.info.id} />))}
                {/* <RestrauntCard resName="Meghna Foods" cusineName="Biryani, North Indian, Asian"/>
                <RestrauntCard resName="KFC" cusineName="Crispy Chicken, Chicken Wings,Burger"/> */}
                
            </div>
        </div>
    )
}

export default Body;