import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { COLLECTION_ID_ALLPRODUCTS, DATABASE_ID, databases } from '../appwriteConfig'
import { ID, Query } from 'appwrite'
import { useCart } from "react-use-cart";

const Detail = ({setOpen}) => {

// ###### ADD TO CART ####
const {id} = useParams()

const { addItem } = useCart()
const navigate = useNavigate()

// #### MESSAGE #######
const [message, setMessage] = useState('')
const [storeMessage,setStoreMessage] = useState(JSON.parse(localStorage.getItem("storeMessage")) || [])
const [showMessage,setShowMessage] = useState(false)
const onMessage = () =>{
  setStoreMessage([...storeMessage,message])
  console.log("MESSAGE",storeMessage)
navigate(`/detail/${id}`)
}
///////////////////////////////////////


const [quantity,setQuantity] = useState("1")
// console.log("detailQuantity",quantity)


const [data,setData] = useState([])



const handleUpdate = async (product_id) => {
  databases.updateDocument(
    DATABASE_ID,
    COLLECTION_ID_ALLPRODUCTS,
    product_id,
    {
      quantity : quantity,
      message : storeMessage
  }
  );
// console.log(product_id)
};


const getData = async () =>{
  let promise = await databases.listDocuments(
    DATABASE_ID,
    COLLECTION_ID_ALLPRODUCTS,
    
    [
      Query.equal('id', id)
    ]
  );
  setData(promise.documents)
  console.log("detail",promise.documents)
  
  
}
useEffect(() =>{
getData(),
localStorage.setItem("storeMessage",JSON.stringify(storeMessage))
},[quantity,message,storeMessage])

// console.log( "Ahmad",data[0].quantity)
return (
    <div>
    {
        data.map((val) =>{
            return (
                <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/3 w-[80%] lg:h-[400px] h-[100px] object-cover object-center rounded" src={val.image} />
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{val.name}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#39245f]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#39245f]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#39245f]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#39245f]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#39245f]" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">{val.message.length} Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">{val.detail} Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veniam soluta provident vel pariatur qui vitae consequuntur, odio, praesentium, maiores quod nostrum cumque eaque voluptatum nobis cupiditate aperiam dignissimos perferendis.</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
          <div class="flex ml-2 items-center w-full justify-between">
          <div className='flex items-center'>
            <span class="mr-3">Quantity</span>
            <div class="relative">
              <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-[#39245f] text-base pl-3 pr-10" onChange={(e) => setQuantity(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>

            </div>
            </div>
            <button className='bg-[#39245f] px-3 py-[10px] rounded-lg text-white' onClick={() => setShowMessage(!showMessage)}>Message</button>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">{val.price}.00$</span>
          <span class="title-font font-medium text-2xl text-gray-900"></span>

          <button class="flex ml-auto text-white bg-[#39245f] border-0 py-2 px-6 focus:outline-none hover:bg-[#39245f] rounded" onClick={() => {addItem(val), setOpen(true) ,  handleUpdate(val.$id)} }>Add to Cart</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      { showMessage &&  <div className='flex flex-col mt-20 bg-[#cdcdcd]'>
        <div className='flex w-full gap-2'>
           <input type="text" placeholder='Write Your Review' className='w-[80%] border-gray-600 text-black px-3 outline-none py-3 border-b-2' onChange={(e) => setMessage(e.target.value)} />
        <button className='w-[20%] bg-black text-white rounded-md' onClick={() => {handleUpdate(val.$id),onMessage()} }>Submit</button>
        </div> 
           <div className=' pt-5 pb-5 px-4'>
           <>{val.message.map((data) =>{
           return <p className='mt-2 border-b-2 pb-2'>{data}</p>
            })}</>
        </div>

        </div>
      }
      </div>
    </div>
  </div>
</section>
            )
        })
    }
      <h1>{data.name}</h1>
    </div>
  )
}

export default Detail
