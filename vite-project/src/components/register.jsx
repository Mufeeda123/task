import React, { useState } from "react";
import axios from "axios";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        "https://conext.in/custom_users/api/register/",
        {
          email: email,
          password: password,
          organization: "1",
          otp: otp,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Registration successful");
        // You can perform further actions, such as navigating to a login page or displaying a success message.
      }
    } catch (error) {
      console.error("Registration failed", error);
      // You can handle errors here without setting an "error" state.
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black">
          User Registration
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="otp"
              className="block text-sm font-semibold text-gray-800"
            >
              OTP
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={handleRegistration}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover-bg-black focus:outline-none focus-bg-purple-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
