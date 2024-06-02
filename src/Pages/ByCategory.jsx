import React, { useEffect, useState } from "react";
import "../Stylings/FrontPage.css"
import { v4 as uuidv4 } from 'uuid';
import {
  COLLECTION_ID_ALLPRODUCTS,
  DATABASE_ID,
  databases,
} from "../appwriteConfig";
import { Query } from "appwrite";
import { Link, useParams } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const ByCategory = () => {
  const { category } = useParams();
  const [storeProduct, setStoreProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const handleDelete = async (product_id) => {
    databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID_ALLPRODUCTS,
      product_id
    );}

  const getProduct = async () => {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_ALLPRODUCTS,
      [Query.equal("category", category),
      Query.orderAsc('rating'),

      ],
      
    );
    setStoreProduct(response.documents);
    
  };

  return (
    <div className="bg-[#ededed] w-full min-h-[89.3vh] flex flex-col items-center by-category pt-20">
    <h1 className="text-2xl font-bold text-[#39245f] tracking-wider">{category}</h1>
      <div className="flex  min-w-[94%] flex-wrap gap-6 justify-center pt-10 pb-10">
{
  storeProduct.map((product) =>{
    return(
      <div key={uuidv4()} className="bg-transparent border-2 border-[#39245f] flex flex-col min-w-[320px] max-w-[320px] min-h-[360px] pb-5 h-auto rounded-md">
        <div className="w-full flex justify-center">
        <img src={product.image} className="mt-10" width={160}  alt="" />
        </div>
       <h3 className="text-gray-700 font-semibold text-lg mx-4 mt-5" >${product.price}.00</h3>
       <h3 className="text-[#39245f] mt-3 text-lg mx-4 min-h-[30px] text-center font-semibold" >{product.name}</h3>
       <div className="w-full justify-center mt-5 flex items-center gap-5">
                  {" "}
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
  );
};

export default ByCategory;





// const Products = () => {
 

  
 




// // console.log(select)
//   return (
 
//   );
// };

// export default Products;
