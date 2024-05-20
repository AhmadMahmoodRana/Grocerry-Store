import React, { useState } from 'react'

const Profile = () => {
const [userInfo,setUserInfo] = useState()
  return (
    <div>
       {userInfo ? <h1>{userInfo.name}</h1> : <></> }
    </div>
  )
}

export default Profile
