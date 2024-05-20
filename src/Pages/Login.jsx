import { Field, Form, Formik } from 'formik'
import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../appwriteConfig'

const Login = () => {
const navigate = useNavigate()

const {setStorage} = useLocalStorage("user")
  const onSubmit = async (data) =>{
    try {
      const result = account.createEmailPasswordSession(
        data?.email,
        data?.password
      )    
      setStorage(result)
      setTimeout(() =>{
        navigate('/')
      },1000)
    } catch (error) {
      alert("Not Login")
    }
  
  
  }

  return (
    <div className="flex justify-center items-center h-[90vh] main">
     <div className="w-[400px] h-[auto] shadow-xl shadow-[#39245f] p-4 rounded-md">
      <h1 className="text-center mb-4 mt-4 text-2xl font-bold text-[#39245f]">Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col gap-4 pt-10 pb-10 px-5">
          <Field  name="email" type="email" placeholder={"Email"} className="placeholder:text-[#39245f] border-b-[#39245f] border-b-2 py-2 outline-none bg-transparent text-[#39245f]" />
          <Field
            className="placeholder:text-[#39245f] border-b-[#39245f] border-b-2 py-2 outline-none bg-transparent text-[#39245f]"
            name="password"
            type="password"
            placeholder={"Password"}
          />
         <div className='flex pt-2 gap-2 text-md font-semibold'> Create a new ? <Link to={"/signup"} className='font-bold text-[#39245f] hover:underline'> Account</Link></div>
          <button type="submit" className="mt-5 grow-spin">Login</button>
        </Form>
      </Formik>
    </div>
  </div>
  )
}

export default Login
