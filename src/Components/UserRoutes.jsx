import { Navigate, Outlet } from 'react-router-dom'
import { account } from '../appwriteConfig'
import { useEffect, useState } from 'react';


const UserRoutes = () => {
    const [userInfo,setUserInfo] = useState()
    
    useEffect(() =>{
        const infoPromise = account.get();
    
        infoPromise.then(function(res){
            setUserInfo(res)
        },function(err){
            console.log(err)
        })
    },[]);

return userInfo ? <>{userInfo.email == "techexpert10885@gmail.com" ?  <Outlet/> :  (<Navigate to={"/login"} />) }</> : ""


}


export default UserRoutes

