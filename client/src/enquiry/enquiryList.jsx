import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import axios  from "axios";


export function EnquiryList({ data , getAllenquiry, Swal, setFormData}) {

  let deleteRow= (delid) => {
  Swal.fire({
    title: "Do you want to delete the data?",
  
     showDenyButton: true,
     showCancelButton: true,
     confirmButtonText: "Delete"
    })

     .then((result) => {
  
  if (result.isConfirmed) {
    axios.delete(`http://localhost:8020/api/website/enquiry/delete/${delid}`)
    .then((res)=>{
      toast.success("Enquiry deleted successfully")
      getAllenquiry()
    })
    
  }
  


  else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
})


}

let editRow= (editId) =>{
  axios.get(`http://localhost:8020/api/website/enquiry/single/${editId}`)
  .then((res) => {
    let data = res.data
    //console.log(data)
   setFormData(data.enquiry)
  })
}
  
  return (
    <div className="bg-gray-200 p-4">
      
      <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>

      <div className="overflow-x-auto">
        <Table className="table-fixed w-full">
          <TableHead>
        <TableRow>
        <TableHeadCell className="w-16">Sr No</TableHeadCell>
        <TableHeadCell className="w-48">Name</TableHeadCell>
        <TableHeadCell className="w-64">Email</TableHeadCell>
       <TableHeadCell className="w-40">Phone</TableHeadCell>
       <TableHeadCell className="w-56">Message</TableHeadCell>
       <TableHeadCell className="w-24 text-center">Edit</TableHeadCell>
       <TableHeadCell className="w-24 text-center">Delete</TableHeadCell>
       </TableRow>
       </TableHead>
          <TableBody className="divide-y">

         


            { 
            data.length > 0 ? (
              data.map((item, index) => (
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center" key={item._id}>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">{index + 1}</TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">{item.name}</TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">{item.email}</TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">{item.phone}</TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center max-w-[220px] truncate">{item.message}</TableCell>

                  <TableCell>
                    <button  onClick={()=>editRow(item._id)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-center">
                      Edit
                    </button>
                  </TableCell>

                  <TableCell>
                    <button onClick={()=>deleteRow(item._id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-center">
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}