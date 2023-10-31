import React, { useState } from "react";

function OTPVerificationForm() {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");

 
  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post(
        "https://conext.in/custom_users/api/verify_otp/",
        {
          otp: otp,
          email_address: email,
        }
      );

      if (response.status === 200) {
        setIsVerified(true);
      } else {
        setIsVerified(false);
      }
    } catch (error) {
      setIsVerified(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">OTP Verification</h2>
      <div className="mb-4">
        <label htmlFor="email" className="text-sm block font-semibold mb-2">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="otp" className="text-sm block font-semibold mb-2">
          OTP
        </label>
        <input
          type="text"
          id="otp"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleVerifyOTP}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default OTPVerificationForm;
