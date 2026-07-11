import { useLocation } from "react-router-dom";
import "./ProductDetails.css";


function ProductDetails(){

    const { state } = useLocation();


    if(!state){
        return <h2>Product not found</h2>
    }
    const addToWishlist = () => {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists = wishlist.find(
        item => item.id === state.id
    );

    if (!alreadyExists) {

        wishlist.push(state);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        alert("Added to Wishlist ❤️");
    } else {

        alert("Product already in Wishlist");
    }

};


    return(

        <div className="product-details">


            <img
                src={state.image}
                alt={state.name}
            />


            <div className="details-info">


                <h1>
                    {state.brand}
                </h1>


                <h2>
                    {state.name}
                </h2>


                <h3>
                    ₹{state.price}
                </h3>


                <p>
                    ⭐ {state.rating} Rating
                </p>


                <p className="discount">
                    {state.discount}
                </p>


                <p>
                    Premium quality product with stylish design.
                    Comfortable material and perfect for daily use.
                </p>



                <button className="buy-btn">
                    Buy Now
                </button>


                <button className="bag-btn">
                    Add To Bag 🛒
                </button>


                <button
                className="wishlist-btn"
                onClick={addToWishlist}
                >
               ❤️ Add to Wishlist
                </button>


            </div>


        </div>

    )

}


export default ProductDetails;