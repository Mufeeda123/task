import axios from 'axios';

const api = axios.create(); // No base URL

export const verifyEmail = (email_address, org) => {
  return api.post('https://conext.in/custom_users/api/verify_email/', { email_address, org });
};

export const registerUser = (email, password, org, otp) => {
  return api.post('https://conext.in/custom_users/api/register/', { email, password, org, otp });
};
