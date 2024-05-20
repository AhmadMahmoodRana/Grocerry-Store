import React, { useState } from "react";
import { COLLECTION_ID_ALLPRODUCTS, DATABASE_ID, ID, databases } from "../appwriteConfig";
import { v4 as uuidv4 } from 'uuid';
const AddProduct = () => {
 

const [name,setName] = useState()
const [category,setCategory] = useState("Fruits")
const [price,setPrice] = useState()
const [rating,setRating] = useState()
const [details,setDetails] = useState()
const [fileURL, setFileURL] = useState("")
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    setFileURL(url);
    console.log('File URL:', url);
  } else {
    setFileURL('');
    console.log('No file selected');
  }
};
console.log(fileURL)

const saveFunc = () =>{
  const promise = databases.createDocument(
    DATABASE_ID,
COLLECTION_ID_ALLPRODUCTS,
    ID.unique(),
    { "name": name,
      "category": category,
      "id": uuidv4(),
      "price" : price,
      "image": fileURL,
      "rating": rating,
      "detail": details
     }
    );
    console.log(promise)
    setName("")
    // setImage("")
    setPrice("")
    setRating("")
    setDetails("")
}



  return (
    <div className="w-full h-[91vh] bg-[#ddd] flex flex-col justify-center">
      
      <div className="flex gap-[100px] mt-[30px] justify-center">
        <div className="flex gap-3 justify-center items-center ml-[0px]">
          {" "}
          <label
            htmlFor=""
            className="font-bold text-[17px] tracking-wider font-sans"
          >
            Name :
          </label>{" "}
          <input type="text" className="w-[320px] px-4 py-2" onChange={(e) => setName(e.target.value)} value={name}/>
        </div>
        <div className="flex gap-3 justify-center items-center">
          {" "}
          <label
            htmlFor=""
            className="font-bold text-[17px] tracking-wider font-sans"
          >
            Image Src :
          </label>{" "}
          <input type="file" className="w-[320px] px-4 py-2" onChange={handleFileChange} />
        </div>
      </div>
      <div className="flex gap-[100px] mt-[30px] justify-center">
        <div className="flex gap-3 justify-center items-center ml-[0px]">
          {" "}
          <label
            htmlFor=""
            className="font-bold text-[17px] tracking-wider font-sans"
          >
            Price :
          </label>{" "}
          <input type="text" className="w-[320px] px-4 py-2" onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
        <div className="flex gap-3 justify-center items-center">
          {" "}
          <label
            htmlFor=""
            className="font-bold text-[17px] tracking-wider font-sans"
          >
            Category :
          </label>{" "}
          <select id="countries" aria-placeholder="select" onChange={(e) => setCategory(e.target.value)} className="h-10 outline-none bg-gray-50 border border-gray-300  text-sm  block w-[320px] p-2.5 ">
  <option value="Fruits" >Fruits</option>
  <option value="Vegetables">Vegetables</option>
  <option value="Fish">Fish</option>
  <option value="Meats">Meats</option>
  <option value="Beverage">Beverage</option>
  <option value="Drinks">Drinks</option>
  <option value="Pets">Pets</option>
  <option value="Toys">Toys</option>
</select>
        </div>
      </div>
      <div className="flex gap-[100px] mt-[30px] justify-center">
        <div className="flex gap-3 justify-center items-center ml-[0px]">
          {" "}
          <label
            htmlFor=""
            className="font-bold text-[17px] tracking-wider font-sans"
          >
            Rating :
          </label>{" "}
          <input type="text" className="w-[320px] px-4 py-2" onChange={(e) => setRating(e.target.value)} value={rating} />
        </div>
        
      </div>
      <div className="flex gap-[100px] mt-[30px] justify-center">
        <div className="flex gap-3 justify-center items-center ml-[0px]">
          {" "}
          <label
            htmlFor=""
            className="font-bold text-[17px] tracking-wider font-sans"
          >
            Details :
          </label>{" "}
          <textarea type="text" className="w-[320px] h-[150px] px-4 py-2" onChange={(e) => setDetails(e.target.value)} value={details} />
        </div>
       
      </div>
      
      <div className="w-full flex justify-center py-20">
        <button className="bg-white px-10 py-3 rounded-md" onClick={() => saveFunc()}>Save</button>
      </div>
    </div>
  );
};

export default AddProduct;
