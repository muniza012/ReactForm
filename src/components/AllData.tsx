import React from 'react'
import type { FormValues } from "../types/formTypes";


function AllData() {
  const existingData = localStorage.getItem('formData')
   const arrayData: FormValues[] = existingData? JSON.parse(existingData):[]
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-black-200 to-blue-500">
      <table className="border-collapse border border-black-400">
        <thead>
          <tr className="border border-black-400 px-4 py-2">
            <th className="border border-black-400 px-4 py-2">Full Name</th>
            <th className="border border-black-400 px-4 py-2">Father Name</th>
            <th className="border border-black-400 px-4 py-2">Contact</th>
            <th className="border border-black-400 px-4 py-2">Email</th>
          </tr>
        </thead>

        <tbody>
          {arrayData.map((formdata, index) => (
            <tr key={index} className="border border-black-400 px-4 py-2">
              <td className="border border-black-400 px-4 py-2">
                {formdata.fullName}
              </td>
              <td className="border border-black-400 px-4 py-2">
                {formdata.fatherName}
              </td>
              <td className="border border-black-400 px-4 py-2">
                {formdata.contact}
              </td>
              <td className="border border-black-400 px-4 py-2">
                {formdata.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllData