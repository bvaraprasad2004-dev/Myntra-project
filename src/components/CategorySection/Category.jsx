import { useParams, useNavigate } from "react-router-dom";
import "./Category.css";

function Category(){

    const { type } = useParams();

    const navigate = useNavigate();


    const products = {

        men:[
            {
                id:1,
                image:"https://images.unsplash.com/photo-1617127365659-c47fa864d8bc",
                brand:"Roadster",
                name:"Men Slim Fit Casual Shirt",
                price:999,
                discount:"50% OFF",
                rating:"4.5"
            },
            {
                id:2,
                image:"https://images.unsplash.com/photo-1516257984-b1b4d707412e",
                brand:"Levis",
                name:"Men Regular Fit Jeans",
                price:1999,
                discount:"40% OFF",
                rating:"4.4"
            },
            {
                id:3,
                image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
                brand:"H&M",
                name:"Cotton T-Shirt",
                price:699,
                discount:"30% OFF",
                rating:"4.3"
            },
            {
                id:4,
                image:"https://images.unsplash.com/photo-1506629905607-d405b7a7f9a3",
                brand:"Puma",
                name:"Men Hoodie",
                price:1499,
                discount:"45% OFF",
                rating:"4.6"
            }
        ],


        women:[
            {
                id:5,
                image:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
                brand:"Mango",
                name:"Women Floral Dress",
                price:1599,
                discount:"50% OFF",
                rating:"4.5"
            },
            {
                id:6,
                image:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
                brand:"Biba",
                name:"Women Ethnic Kurta",
                price:1299,
                discount:"35% OFF",
                rating:"4.4"
            }
        ],


        kids:[
            {
                id:7,
                image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
                brand:"H&M Kids",
                name:"Kids Printed T-Shirt",
                price:599,
                discount:"30% OFF",
                rating:"4.4"
            }
        ],


        footwear:[
            {
                id:8,
                image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
                brand:"Nike",
                name:"Men Running Shoes",
                price:4999,
                discount:"40% OFF",
                rating:"4.8"
            },
            {
                id:9,
                image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
                brand:"Adidas",
                name:"Sports Sneakers",
                price:3999,
                discount:"35% OFF",
                rating:"4.7"
            }
        ],


        beauty:[
            {
                id:10,
                image:"https://images.unsplash.com/photo-1556228720-195a672e8a03",
                brand:"Lakme",
                name:"Face Cream",
                price:499,
                discount:"20% OFF",
                rating:"4.5"
            },
            {
                id:11,
                image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
                brand:"Maybelline",
                name:"Makeup Kit",
                price:999,
                discount:"30% OFF",
                rating:"4.6"
            }
        ]

    };



    return(

        <div className="category-page">


            <h1>
                {type?.toUpperCase()} COLLECTION
            </h1>



            <div className="category-products">


            {
                products[type]?.map((item)=>(


                    <div className="category-card" key={item.id}>


                        <img 
                            src={item.image}
                            alt={item.name}
                        />


                        <div className="product-info">


                            <h3>
                                {item.brand}
                            </h3>


                            <p>
                                {item.name}
                            </p>


                            <div className="price">

                                ₹{item.price}

                                <span>
                                    {item.discount}
                                </span>

                            </div>


                            <div className="rating">

                                ⭐ {item.rating}

                            </div>



                            <button
                            onClick={()=>navigate(`/product/${item.id}`,{
                                state:item
                            })}
                            >
                                View Details
                            </button>


                        </div>


                    </div>


                ))
            }


            </div>


        </div>

    )

}


export default Category;