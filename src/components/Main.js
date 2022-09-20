import { UserProvider } from "../context/user";
import {useState, useEffect} from 'react';
import ItemCard from "./ItemCard";
import SearchBar from "./SearchBar";
import "./Main.css";

function Main({items}){
    console.log(items)
    const [displayedItems, setDisplayedItems] = useState([])

    useEffect(()=> {
        setDisplayedItems(items)
    }, [])

    return(
    <div>
        <SearchBar items={items} setDisplayedItems={setDisplayedItems} displayedItems={displayedItems}/>
    <div className="grid">
    {displayedItems.map(item=> <UserProvider><ItemCard item={item}/></UserProvider> )}</div></div>
)
}

export default Main