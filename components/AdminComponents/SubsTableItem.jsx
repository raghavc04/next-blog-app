import React from 'react';

const SubsTableItem = ({ email, mongoId, date, deleteEmail }) => {
    const emailDate = new Date(date);
    return (
        <tr className='bg-white border-b text-left'>
            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                {email ? email : 'No Email'}
            </th>
            <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
            <td onClick={() => deleteEmail(mongoId)} className='px-6 py-4 cursor-pointer relative group'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100'>
                    Delete Email
                </span>
            </td>
        </tr>
    );
}

export default SubsTableItem;