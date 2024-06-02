import React, { useEffect, useState } from "react";
import "../Stylings/FrontPage.css";
import { v4 as uuidv4 } from "uuid";
import {
  COLLECTION_ID_ALLPRODUCTS,
  DATABASE_ID,
  account,
  databases,
} from "../appwriteConfig";
import { Query } from "appwrite";
import Loader from "../Components/Loader";
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate} from "react-router-dom";
// ### ADD TO CART ###


 


const Products = () => {
  const [userInfo,setUserInfo] = useState()
const navigate = useNavigate()
  useEffect(() =>{
      const infoPromise = account.get();
  
      infoPromise.then(function(res){
          setUserInfo(res)
      },function(err){
          console.log(err)
      })
  },[])
 
  const [storeProduct, setStoreProduct] = useState([]);
  const [select, setSelect] = useState("All");
  const [select1, setSelect1] = useState("$updatedAt");
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [update, setUpdate] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);




// #############################
  useEffect(() => {
    getProduct();
  }, [select, select1, update,]);

  useEffect(() => {
    setHasNextPage(storeProduct.length === 8); // Assuming 8 products per page
    setHasPrevPage(update > 0);
  }, [storeProduct, update]);

  const getProduct = async () => {
    setLoader(true);
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_ALLPRODUCTS,
      [
        Query.orderDesc(select1),
        Query.limit(8),
        Query.offset(8 * update),
        select !== "All" && Query.equal("category", select),
      ].filter(Boolean)
    );
    setStoreProduct(response.documents);
    setLoader(false);
  };

  const handleNextPage = () => {
    if (hasNextPage) {
      setUpdate((prevUpdate) => prevUpdate + 1);
    }
  };

  const handlePrevPage = () => {
    if (hasPrevPage) {
      setUpdate((prevUpdate) => prevUpdate - 1);
    }
  };

  const handleDelete = async (product_id) => {
    databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID_ALLPRODUCTS,
      product_id
    );
    setStoreProduct((prevProducts) =>
      prevProducts.filter((product) => product.id !== product_id)
    );
  };

  return (
    <div className="bg-[#ededed] w-full min-h-[89.3vh] flex flex-col items-center by-category pt-20 pb-5">
      <h1 className="text-2xl font-bold text-[#39245f] tracking-wider">
        All Products
      </h1>
      <div className="w-[89%] bg-transparent h-[100px] flex  justify-between items-center">
        <select
          id="categories"
          aria-placeholder="select"
          onChange={(e) => setSelect(e.target.value)}
          className="h-10 outline-none bg-gray-50 border border-gray-300  text-sm  block w-[200px] p-2.5 "
        >
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fish">Fish</option>
          <option value="Meats">Meats</option>
          <option value="Beverage">Beverage</option>
          <option value="Drinks">Drinks</option>
          <option value="Pets">Pets</option>
          <option value="Toys">Toys</option>
        </select>
        <input
          type="text"
          className="w-[300px] py-2 px-4"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search By Name"
        />

        <select
          id="sorting"
          onChange={(e) => setSelect1(e.target.value)}
          className="h-10 outline-none bg-gray-50 border border-gray-300  text-sm  block w-[200px] p-2.5 "
        >
          <option value="$updatedAt">Default Sorting</option>
          <option value="rating">Sort by Rating</option>
          <option value="$createdAt">Sort by Latest</option>
        </select>
      </div>

      {loader ? <Loader /> : null}
      <div className="flex  min-w-[94%] flex-wrap gap-6 justify-center pt-10 pb-10">
        {storeProduct
          .filter((val) =>
            val.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div
              key={uuidv4()}
              className="bg-transparent border-2 border-[#39245f] flex flex-col min-w-[320px] max-w-[320px] min-h-[360px] pb-5 h-auto rounded-md"
            >
              <div className="w-full flex justify-center flex-col items-center">
                <img
                  src={product.image}
                  className="mt-10"
                  width={160}
                  alt="not load"
                />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg mx-4 mt-5">
                ${product.price}.00
              </h3>
              <h3 className="text-[#39245f] mt-3 text-lg mx-4 min-h-[30px] text-center font-semibold">
                {product.name}
              </h3>
             
              <div className="w-full justify-center mt-5 flex items-center gap-5">
                  {" "}
                 <Link to={`/detail/${product.id}`}>
                  <button className="slide-button w-[200px]">See Details</button>
                  </Link>
                  {userInfo ? <>{userInfo.email == "techexpert10885@gmail.com" ?  <div className="text-[30px] border-2 border-[#39245f] h-[45px] flex items-center px-1 text-[#39245f]">
                 <MdDeleteForever onClick={() => {handleDelete(product.$id), navigate("/products")}}  />
                </div> : <div></div> }</> : ""}
            
               
              </div>
            </div>
          ))}
      </div>
      <div className="flex gap-4">
        <button
          className={`bg-[#39245f] w-[80px] py-3 text-white rounded-md ${
            !hasPrevPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevPage}
          disabled={!hasPrevPage}
        >
          Prev
        </button>
        <button
          className={`bg-[#39245f] w-[80px] py-3 text-white rounded-md ${
            !hasNextPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNextPage}
          disabled={!hasNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;






