import React from "react";
import { Field, Form, Formik } from "formik";
import { ID, account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";
import "../Stylings/CategorySlider.css"

const Signup = () => {
const navigate = useNavigate()
const onSubmit = async (data) =>{
  try {
    const result = account.create(
      ID.unique(),
      data?.email,
      data?.password,
      data?.name
    )    
    setTimeout(() =>{
      navigate('/login')
    },1000)
  } catch (error) {
    return "error"
  }


}


  return (
    <div className="flex justify-center items-center h-[90vh] main">
      <div className="w-[400px] h-[auto] shadow-xl shadow-[#39245f] p-4 rounded-md">
        <h1 className="text-center mb-4 mt-4 text-2xl font-bold text-[#39245f]">Sign Up</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-4 pt-10 pb-10 px-5">
            <Field  name="name" type="text" placeholder={"Name"} className="placeholder:text-[#39245f] border-b-[#39245f] border-b-2 py-2 outline-none bg-transparent text-[#39245f]" />
            <Field  name="email" type="email" placeholder={"Email"} className="placeholder:text-[#39245f] border-b-[#39245f] border-b-2 py-2 outline-none bg-transparent text-[#39245f]" />
            <Field
              className="placeholder:text-[#39245f] outline-none border-b-2 border-b-[#39245f] py-2 bg-transparent text-[#39245f]"
              name="password"
              type="password"
              placeholder={"Password"}
            />
            <button type="submit" className="mt-5 grow-spin">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;

