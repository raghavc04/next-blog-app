'use client'
import SubsTableItem from '@/components/AdminComponents/SubsTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const page = () => {
  const [emails,setEmails] = useState([]);
  const fetchEmails = async () => {
   const response = await axios('/api/email');
   setEmails(response.data.emails);
  }

  const deleteEmail = async (mongoId) => {
   const response = await axios.delete('/api/email',{
    params:{
      id: mongoId
    }
   })
   if(response.data.success){
    toast.success('Email deleted successfully');
    fetchEmails();
   }else{
    toast.error('Failed to delete email');
      // Refetch emails after deletion failure to reflect changes in the UI.
    // Add error handling logic here if needed.
 
   }
  }

  useEffect(() => {
    fetchEmails();
  }, [])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Subscriptions</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hidden">
       <table className='w-full text-sm text-gray-500'>
        <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
         <tr>
          <th scope='col' className='px-6 py-3'>Email Subscription</th>
          <th scope='col' className='px-6 py-3 hidden sm:block'>Date</th>
          <th scope='col' className='px-6 py-3'>Action</th>
        
         </tr>
        </thead>
        <tbody>
          {emails.map((email, index) => {
             return <SubsTableItem key={index} mongoId={email._id} deleteEmail={deleteEmail} email={email.email} date={email.date} />
          })}
         
        </tbody>
       </table>
      </div>
    </div>
  );
}

export default page;
