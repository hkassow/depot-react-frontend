import { UserContext } from "../context/user";

function ItemCard({item}){
    function addToCart(){
        fetch('/cart_order_items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "imageble_type": "Cart",
                "imageable_id": UserContext.cart.id,
                "item_id": item.id
            })
        })
        console.log("added to cart")
    }

    return(
        <div>
            <p>{item.name}</p>
            <img src ={item.picture}/>
            <p>${item.price}</p>
            <p>{item.description}</p>
            <p>{item.instock? `${item.quantity} In Stock` : "Out of Stock!"}</p>
            {item.instock? <button onClick={addToCart}>Add To Cart</button> : null}
            {/* alert when back in stock? */}
        </div>
    )
}

export default ItemCard;