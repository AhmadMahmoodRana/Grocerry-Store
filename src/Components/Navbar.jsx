import {AiOutlineMenu} from "react-icons/ai"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { account } from "../appwriteConfig";
import Hero_bg from '../assets/backgrounds/1_bg.png'
import useLocalStorage from "../hooks/useLocalStorage";
const Navbar = ({setOpen}) =>{

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

const {removeItem} = useLocalStorage()
const onLogout = () =>{
    account.deleteSession("current");
    removeItem("user");
    // navigate("/login") 
}






    return(
        <>
<div className="bg-green-300/10 px-2 py-1 bg-center bg-no-repeat" style={{ backgroundImage: `url(${Hero_bg})`, backgroundSize: 'cover'}}>
    <div className="max-w-[95%] py-[13px] items-center flex justify-between mx-auto">
        <Link to={"/"}>
        <div className="text-3xl font-bold text-[#1b5e20]">
          AHMAD
        </div>
        </Link>
        <AiOutlineMenu className="text-white text-2xl md:hidden block"/>
        <ul className="hidden md:flex  text-black gap-10 font-sans font-semibold tracking-wide text-[18px]">
            <Link to={"/"} className="hover:text-[#39245f] transition-all duration-[1s]">
                Home
            </Link>
            <Link to={"/products"} className="hover:text-[#39245f] transition-all duration-[1s]">
            All Product
            </Link>
           
            {userInfo ? <>{userInfo.email == "techexpert10885@gmail.com" ?  <Link to={"/addproduct"} className="hover:text-[#39245f] transition-all duration-[1s]">Add Product</Link>: "" }</> : ""}
            
            
            <li className="hover:text-[#39245f] transition-all duration-[1s]">
                Blog
            </li>
            <li className="hover:text-[#39245f] transition-all duration-[1s]">
                Contact
            </li>
            

        </ul>
        <div className="flex justify-center items-center gap-4 md:hidden lg:flex">
          
          <div className="w-13 px-3 py-3 rounded-[60px] bg-[#1b5e20]"> 
        <FaShoppingCart className="text-[19px] text-white" onClick={() => setOpen(true)}/>
        </div>
        {userInfo ?  <button className="bg-[#1b5e20] text-white px-4 py-2 rounded-md" onClick={() => onLogout()}>Log Out</button>:  <Link to={"/login"}>
            <button className="bg-[#39245f] text-white px-4 py-2 rounded-md">Login</button>
            </Link> }
        </div>
    </div>
</div>
        </>
    )
}
export default Navbar;