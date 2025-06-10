"use client";

import { useState } from "react";

const RegistrationForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    userName: "",
    email: "",
    password: "",
  });

  // State to manage success or error messages
  const [message, setMessage] = useState("");

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5500/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("User has been registered successfully");
        // Reset form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          userName: "",
          email: "",
          password: "",
        });
      } else {
        setMessage("User registration failed");
      }
    } catch (error) {
      setMessage("User registration failed");
    }
  };

  // Handles input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name Input */}
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
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Last Name Input */}
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
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Phone Number Input */}
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
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* User Name Input */}
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
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Password Input */}
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
            name="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>

      {/* Display success or error message */}
      {message && (
        <div className="mt-4 text-center text-red-400">{message}</div>
      )}
    </div>
  );
};

export default RegistrationForm;
