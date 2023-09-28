// This is where all API calls are handled

// Check User Status
import AsyncStorage from '@react-native-async-storage/async-storage';

// Check login & waitlist status
const getUserStatusFromApi = async (token) => {

  // Please uncomment the following lines once backend server is set up

  // const response = await fetch('https://your-api.com/userStatus', {
  //   headers: {
  //     'Authorization': `Bearer ${token}`
  //   }
  // });
  // return await response.json();
  
  // Please comment the following lines of dummy data once backend server is set up
  return {
    isLoggedIn: true,
    isOnWaitlist: false,
  };
}

export const checkUserStatus = async () => {
  try {
    // Try to get the token from storage
    const token = await AsyncStorage.getItem('@storage_Key'); //@storage_Key = Key used to store the token

    if (token !== null) {
      // User has a token, they are logged in.
      // Now let's check if they are on the waitlist by making an API request
      const userStatus = await getUserStatusFromApi(token);

      return {
        isLoggedIn: true,
        isOnWaitlist: userStatus.isOnWaitlist,
      };
    } else {
      // No token, user is not logged in
      return {
        isLoggedIn: false,
        isOnWaitlist: false,
      };
    }
  } catch (error) {
    // There was an error, handle it here
    console.error(error);
    return {
      isLoggedIn: false,
      isOnWaitlist: false,
    };
  }
}
  

//Function for Phone number submission (Login/Sign up by phone number)
export const submitPhoneNumber = async (phoneNumber) => {
  const response = await fetch('https://your-backend-url.com/send_otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phoneNumber: phoneNumber,
    })
  });
  const data = await response.json();
  return data;
};


// Function to submit OTP to back-end
export const submitOTP = async (otp) => {
  // Uncomment when ready to connect to backend
  /*
  try {
      const response = await fetch('https://your-api-url/verifyOTP', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ otp }), // assuming your backend expects a JSON with the OTP
      });

      if (response.ok) {
          const data = await response.json();
          return { success: true, data: { user: data.user, status: data.status, isNewUser: data.isNewUser } };
      } else {
          const error = await response.json();
          return { success: false, error: error.message || 'OTP validation failed' };
      }
  } catch (error) {
      console.error(error);
      return { success: false, error: 'Network error' };
  }
  */

  // Mock data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp === "123456") {
        resolve({ 
            success: true, 
            data: { 
                user: { name: 'John Doe', email: 'john@doe.com' },
                status: '',
                isNewUser: true
            } 
        });
      } else {
        resolve({ success: false, error: 'OTP validation failed' });
      }
    }, 2000); // Simulates network delay
  });
}


// Funtion to register a new user (Submit Sign Up form). Uncomment when back end is connected:
// export const registerUser = async (userData) => {
//   try {
//     const response = await fetch('https://your-api-endpoint.com/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // any other headers that your API requires
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       // Handle error response
//       const message = `An error has occured: ${response.status}`;
//       throw new Error(message);
//     }

//     const data = await response.json();

//     // Handle successful registration
//     // You might return some user data or token received from server
//     return data;

//   } catch (error) {
//     console.error(error);
//     // Handle error
//     throw error;
//   }
// };

// Delete when back end is connected:
export const registerUser = async (userData) => {
  return new Promise((resolve, reject) => {
    // Simulate API call duration
    setTimeout(() => {
      // Mock response
      const response = {
        status: 200,
        data: {
          message: 'User registration successful.',
          user: userData,
        },
      };

      // You can also simulate an error by rejecting the promise
      const error = new Error('User registration failed.');
      reject(error);

      resolve(response);
    }, 2000);
  });
};


// Function to connect account to LinkedIn
import { authorize } from 'react-native-app-auth';

export const config = {
  clientId: '<YOUR_LINKEDIN_CLIENT_ID>',
  clientSecret: '<YOUR_LINKEDIN_CLIENT_SECRET>',
  redirectUrl: '<YOUR_APP_REDIRECT_URI>',
  scopes: ['r_liteprofile', 'r_emailaddress'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization',
    tokenEndpoint: 'https://www.linkedin.com/oauth/v2/accessToken',
  },
};

export const handleLinkedInSignIn = async () => {
  try {
    const result = await authorize(config);
    // Handle success - you should now have an access token in result.accessToken
  } catch (error) {
    // Handle error
  }
};


// Function to get the subscription prices set by admin
// Uncomment when connected to back-end
// export const getSubscriptionPrices = async () => {
//   try {
//       const response = await fetch('api/subscriptions'); // your endpoint
//       const data = await response.json();
//       return data;
//   } catch (error) {
//       console.error(error);
//   }
// }

// Delete when back-end is connected:
export const getSubscriptionPrices = async () => {
  try {
      // This simulates an API call with a delay of 1 second
      return new Promise(resolve => {
          setTimeout(() => {
              resolve([
                  {
                      name: "1-month Subscription",
                      price: "50,000",
                      discount: null,
                  },
                  {
                      name: "6-month Subscription",
                      price: "285,000",
                      discount: 5,
                  },
                  {
                      name: "Annual Subscription",
                      price: "540,000",
                      discount: 10,
                  }
              ]);
          }, 1000);
      });
  } catch (error) {
      console.error(error);
  }
}


// Send card details to back-end
// export const handlePayment = async (subscriptionId, userDetails, token) => {
//   try {
//     const response = await fetch("https://your-backend-endpoint/pay", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}` // If you have a token for authentication
//       },
//       body: JSON.stringify({
//         subscriptionId,
//         userDetails
//       })
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Could not process the payment.");
//     }

//     return data;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };


// Paystack Initialization
// const BASE_URL = "YOUR_BACKEND_URL"; // e.g., "https://yourapi.com"

// export const initializePayment = async (email, amount, metadata = {}) => {
//     try {
//         const response = await fetch(`${BASE_URL}/paystack/initialize`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email,
//                 amount,
//                 metadata
//             })
//         });

//         const data = await response.json();

//         if (data && data.authorization_url) {
//             return data.authorization_url;
//         } else {
//             throw new Error("Initialization failed");
//         }

//     } catch (error) {
//         console.error("Error initializing payment:", error);
//         throw error;
//     }
// };

const BASE_URL = "YOUR_BACKEND_URL";

// This method sends the receipt to your backend for validation.
// export const validateReceipt = async (receipt, platform) => {
//     try {
//         const response = await fetch(`${BASE_URL}/validate-receipt`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 receipt,
//                 platform // this can be 'apple' or 'google' depending on where the purchase was made.
//             })
//         });

//         const data = await response.json();

//         if (data && data.success) {
//             return data;
//         } else {
//             throw new Error("Receipt validation failed");
//         }
//     } catch (error) {
//         console.error("Error validating receipt:", error);
//         throw error;
//     }
// };


// This mock just simulates a successful purchase and generates a fake receipt.
export const mockPurchase = async (productId) => {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate some delay

  return {
      success: true,
      receipt: 'mock_receipt_' + Date.now()
  };
};

// This mock simulates a receipt validation. 
// In real-life scenarios, this step would involve a server call.
export const validateReceipt = async (receipt) => {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate some delay

  if (receipt.startsWith('mock_receipt_')) {
      return { success: true };
  } else {
      throw new Error("Mock receipt validation failed");
  }
};
