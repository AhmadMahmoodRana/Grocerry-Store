import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
const { getItem } = useLocalStorage()
const user = getItem("user")
    return user ? (
    <Outlet/>

    
  ): (<Navigate to={"/login"} />)
}

export default PrivateRoutes
