import "./Wishlist.css";
import { useEffect, useState } from "react";
import { FaHeart, FaShoppingBag, FaTrash } from "react-icons/fa";

function Wishlist(){

    const [wishlist, setWishlist] = useState([]);


    useEffect(()=>{

        const items = JSON.parse(localStorage.getItem("wishlist")) || [];

        setWishlist(items);

    },[]);


    const removeItem = (id)=>{

        const updatedList = wishlist.filter(
            item => item.id !== id
        );

        setWishlist(updatedList);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(updatedList)
        );

    };


    return(

        <div className="wishlist-page">

            <div className="wishlist-header">

                <h1>
                    My Wishlist <FaHeart/>
                </h1>

                <p>
                    {wishlist.length} items saved
                </p>

            </div>


            {
                wishlist.length === 0 ?

                <div className="empty-wishlist">

                    <FaHeart className="empty-icon"/>

                    <h2>Your Wishlist is Empty</h2>

                    <p>
                        Add items you love and they will appear here
                    </p>

                    <button>
                        Continue Shopping
                    </button>

                </div>


                :


                <div className="wishlist-products">

                    {
                        wishlist.map((item)=>(

                            <div className="wishlist-card" key={item.id}>


                                <img 
                                  src={item.image}
                                  alt={item.name}
                                />


                                <div className="wishlist-details">

                                    <h3>
                                        {item.name}
                                    </h3>

                                    <p>
                                        ₹{item.price}
                                    </p>


                                    <button className="bag-btn">
                                        <FaShoppingBag/>
                                        Move to Bag
                                    </button>


                                    <button 
                                      className="remove-btn"
                                      onClick={()=>removeItem(item.id)}
                                    >
                                        <FaTrash/>
                                        Remove
                                    </button>


                                </div>


                            </div>

                        ))
                    }

                </div>

            }


        </div>

    )

}

export default Wishlist;