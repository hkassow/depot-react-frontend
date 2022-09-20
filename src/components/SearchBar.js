import {useState} from 'react'

function SearchBar({items, setDisplayedItems, displayedItems}){
    const [stock, setStock] = useState(false)

    function handleSearch(e){
        setDisplayedItems(items.filter(item => item.name.includes(e.target.value)))
    }

    function handleSetStock(){
        if(!stock) setDisplayedItems(displayedItems.filter(item => item.instock))
        else setDisplayedItems(items)
        setStock(!stock)
    }

    return(
        <div>
            <input type="checkbox" onChange={handleSetStock}/><label>In-Stock Only</label>
            <input type="search" onChange={e => handleSearch(e)}/>
        </div>
    )
}

export default SearchBar;