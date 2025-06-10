import employeeData from "../data/employees"

import React from 'react'

const EmployeeList = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4">
            <h2 className="text-2xl mb-4">Employee List</h2>
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="border-b-2">
                        <th className="py-2 px-4 text-left text-gray-700">Name</th>
                        <th className="py-2 px-4 text-left text-gray-700">Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee) => {
                        return (
                            <tr key={employee.id} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-4">{employee.name}</td>
                                <td className="py-2 px-4">{employee.position}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>

    </div>
  )
}

export default EmployeeList