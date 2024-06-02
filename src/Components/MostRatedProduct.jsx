import React, { useEffect, useState } from "react";
import "../Stylings/FrontPage.css"
import {
  COLLECTION_ID_ALLPRODUCTS,
  DATABASE_ID,
  databases,
} from "../appwriteConfig";
import { v4 as uuidv4 } from 'uuid';
import { Query } from "appwrite";
import { Link } from "react-router-dom";
const MostRatedProduct = () => {
    
    const [storeProduct, setStoreProduct] = useState([]);
  
    useEffect(() => {
      getProduct();
    }, []);
  
    const getProduct = async () => {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_ALLPRODUCTS,
        [
            Query.orderDesc('rating'),
        ]
      );
      setStoreProduct(response.documents);
      
    };
  return (
    <div className='w-full min-h-[400px] h-auto pt-10 flex flex-col'>
      <h1 className="text-[30px] font-bold text-[#39245f] mx-6">Most Rated Products</h1>
<div className="flex gap-4 flex-wrap justify-center pt-5 pb-5">
{
        storeProduct.slice(0,5).map((product) =>{
            return(
                <div key={uuidv4()} className="bg-transparent border-2 border-[#e9e8e8] flex flex-col min-w-[280px] max-w-[280px] min-h-[200px]  h-auto rounded-md">
        <div className="w-full flex justify-center">
        <img src={product.image} className="mt-10" width={130}  alt="" />
        </div>
       <h3 className="text-gray-700 font-semibold text-md mx-4 mt-5" >${product.price}.00</h3>
       <h3 className="text-[#344648] mt-3 text-md mx-4 min-h-[60px] text-center font-semibold" >{product.name}</h3>
       <div className="w-full justify-center flex pb-3">
       <Link to={`/detail/${product.id}`}>
                  <button className="slide-button w-[200px]">See Details</button>
                  </Link>
       </div>
        </div>
            )
        })
    }
</div>


    </div>
  )
}

export default MostRatedProduct
