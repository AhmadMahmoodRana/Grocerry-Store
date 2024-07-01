import React from 'react'
import { ImTruck } from "react-icons/im";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiPackageFill } from "react-icons/pi";
import { FaIdeal } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
const FeatureLabel = () => {
  return (
    <div className='w-full flex justify-center bg-white mt-5 px-10'>
    <div className='grid  grid-cols-5 justify-center w-[100%] h-[108px]'>
      <div className='flex items-center gap-5'>
        <div className='text-green-500 text-[50px]'>
         <ImTruck />
        </div>
        <div className='flex flex-col '>
        <p className='text-black text-lg font-semibold'>Free Shiping</p>
        <p className='text-gray-600 font-semibold'>Orders $50 or more</p>
        </div>

      </div>
      <div className='flex items-center gap-5'>
        <div className='text-green-500 text-[50px]'>
        <GiTakeMyMoney />
        </div>
        <div className='flex flex-col'>
        <p className='text-black text-lg font-semibold'>Save Money</p>
        <p className='text-gray-600 font-semibold'>At lowest price</p>
        </div>

      </div>
      <div className='flex items-center gap-5'>
        <div className='text-green-500 text-[50px]'>
        <PiPackageFill />
        </div>
        <div className='flex flex-col'>
        <p className='text-black text-lg font-semibold'>100% Return Policy</p>
        <p className='text-gray-600'>Any Time Return Product</p>
        </div>

      </div>
      <div className='flex items-center gap-5'>
        <div className='text-green-500 text-[50px]'>
        <FaIdeal />
       </div>
        <div className='flex flex-col'>
        <p className='text-black text-lg font-semibold'>Best Deal Offer</p>
        <p className='text-gray-600'>Grab Your Gear and Go</p>
        </div>

      </div>
      <div className='flex items-center gap-5'>
        <div className='text-green-500 text-[50px]'>
        <RiCustomerService2Fill />
        </div>
        <div className='flex flex-col'>
        <p className=' text-black text-lg font-semibold'>Support 24/7</p>
        <p className='text-gray-600'>Contact us 24 hours a day</p>
        </div>

      </div>
    </div>
</div>
  )
}

export default FeatureLabel
