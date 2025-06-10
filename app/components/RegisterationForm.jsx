"use client";
import React from "react";

const RegisterationForm = () => {
  const handleSubmit = () => {
    console.log("Form Submitted ");
  };
  const handleInputChange = () => {
    console.log("Input");
  };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Registeration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-600"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-600"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={""}
            onChange={handleInputChange}
            required
          />
        </div>
           <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={""}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="paswword"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={""}
            onChange={handleInputChange}
            required
          />
        </div>
     
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-600"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={""}
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterationForm;
