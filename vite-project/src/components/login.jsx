import React, { useState } from "react";
import verifiEmail from "./verifyemail";
import axios from "axios";

function VerifyEmail() {
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");

  const handleVerifyEmail = async () => {
    // verifiEmail(email, org);
    const requestBody = {
      email_address: email,
      org: org,
    };
    await axios
      .post("https://conext.in/custom_users/api/verify_email/", {
        email_address: email,
        org,
        
        
      })
      .then(() => {
        window.alert("Success");
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black">
          Verify Email
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
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Organization
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={handleVerifyEmail}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-black focus:outline-none focus:bg-purple-600"
            >
              Verify Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
