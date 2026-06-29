
import React, { useEffect, useState } from 'react';
import { EnquiryList } from './enquiry/enquiryList';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function Enquiry() {

  let [enquiryList, setEnquiryList] = useState([])

  let [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    message:''
  })
  let saveEnquiry = (e) => {
    e.preventDefault()
    /*let formData = {
      name:e.target.name.value, // e represents submit, target represents form
      email:e.target.email.value,
      phone:e.target.phone.value,
      message:e.target.message.value
    }
      */

    if(formData._id) {
      console.log(formData._id)
      axios.put(`http://localhost:8020/api/website/enquiry/update/${formData._id}`, formData)
      .then((res) => {
        toast.success("Enquiry updated successfully")
        setFormData({
          name:'',
          email:'',
          phone:'',
          message:'',
          _id:''
        })

        console.log(formData)

        getAllenquiry()

      })
    }
    else {

       axios.post('http://localhost:8020/api/website/enquiry/insert', formData).then((res) =>{
      //console.log(res.data)
      toast.success("Enquiry saved successfully.")
      
      setFormData({
        name:'',
        email:'',
        phone:'',
        message:'',
        _id:''

      })
      getAllenquiry()
    })

    }
   
  }
  //console.log(enquiryList)
  
  let getValue=(e)=>{
    let inputName= e.target.name
    let inputValue = e.target.value
    let odlData = {...formData}
    odlData[inputName] = inputValue
    setFormData(odlData)

    /*
    when we make copy : olddata looks like this:
    name :'', email:'', phone:'', message:''
    when we get the values of name, email, phone and message then it updates them like this:
    name:"idrees",
    email:"idrees2020@gmail.com",
    phone:"03253421866",
    message:"ok"
    */

  }

  let getAllenquiry = () => {
    axios.get("http://localhost:8020/api/website/enquiry/view")
    .then((res) =>{
      return res.data
    })
    .then((finalData)=>{
      if(finalData.status){
        setEnquiryList(finalData.enquiryList)

      }
    })

  }

  useEffect(()=>{
    getAllenquiry()
  },[])

  return (
    <div>
      <ToastContainer/>
      <h1 className="text-4xl text-center p-6 font-bold">
        User Enquiry
      </h1>
    
      <div className="grid grid-cols-[30%_auto] gap-10">

        {/* Form Panel */}
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>
          <form onSubmit={saveEnquiry}  >
           
            <div className="py-3">
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
              <input id="name" value={formData.name} name="name" onChange={getValue} type="text" placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required />
            </div>

            <div className="py-3">
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input id="email" value={formData.email} name="email" onChange={getValue} type="email" placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required />
            </div>

            <div className="py-3">
              <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
              <input id="phone" value={formData.phone} name="phone"  onChange={getValue} type="text" placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required />
            </div>

            <div className="py-3">
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" value={formData.message} name="message" onChange={getValue} placeholder="Leave a comment..." rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required />
            </div>

            <div className="py-3">
              <button type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                {formData._id ? "Update" : "Save" }
              </button>
            </div>

          </form>
        </div>
        <EnquiryList data={enquiryList} getAllenquiry={getAllenquiry} Swal={Swal}   setFormData={setFormData}/>
      
      
      </div>
    </div>
  );
}


