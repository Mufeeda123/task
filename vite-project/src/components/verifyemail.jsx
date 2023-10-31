import axios from 'axios';

// Function to verify email
const verifyEmail = async (email, org) => {
  // Create the request body
  const requestBody = {
    email_address: email,
    // org: '1', // Assuming 'org' is a static value
  };

  // Make the POST request using Axios
  try {
        const response = await axios.post('https://conext.in/custom_users/api/verify_email/', requestBody);
        // Handle the successful response here, such as displaying a success message.
        console.log('Email verification successful');
    } catch (error) {
        // Handle errors here, such as displaying an error message.
        console.error('Email verification failed');
    }
};

export default verifyEmail;
