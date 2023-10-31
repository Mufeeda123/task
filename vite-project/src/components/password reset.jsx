import React, { useState } from "react";
import axios from "axios";

function ResetPasswordForm() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);
 
  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        "https://conext.in/custom_users/api/reset_password/",
        {
          email_address: email,
          otp: otp,
          new_password: newPassword,
        }
      );

      if (response.status === 200) {
        setIsPasswordReset(true);
      } else {
        setIsPasswordReset(false);
      }
    } catch (error) {
      setIsPasswordReset(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        Reset Password
      </h2>
      {!isPasswordReset ? (
        <>
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
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="text-sm block font-semibold mb-2">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleResetPassword}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              Reset Password
            </button>
          </div>
        </>
      ) : (
        <div className="text-green-600 text-center">
          Password reset successful!
        </div>
      )}
    </div>
  );
}

export default ResetPasswordForm;
