import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://conext.in/custom_users/api/login/",
        {
          username: email, // Send the email as the username
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      ).then ((res)=>{
        console.log(res);
      })

    //   if (response.status === 200) {
    //     console.log("Login successful");
    //   } else {
    //     console.error("Login failed");
    //   }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black">Login</h1>
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
              value={email} // Use the email state variable
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

          <div className="mt-6">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover-bg-black focus:outline-none focus-bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
