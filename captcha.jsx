// import React, { useState, useEffect } from 'react';

// const Captcha = () => {
//   // State to store the generated CAPTCHA
//   const [captcha, setCaptcha] = useState('');
  
//   // State to store the user's input
//   const [userInput, setUserInput] = useState('');
  
//   // State to store the result message
//   const [resultMessage, setResultMessage] = useState('');

//   // Function to generate a random captcha code
//   const generateCaptcha = () => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let captchaCode = '';
//     for (let i = 0; i < 6; i++) {
//       captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     setCaptcha(captchaCode);
//   };

//   // Function to handle user input change
//   const handleChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   // Function to verify user's input
//   const verifyCaptcha = () => {
//     if (userInput === captcha) {
//       setResultMessage('CAPTCHA matched!');
//     } else {
//       setResultMessage('CAPTCHA does not match. Try again!');
//       generateCaptcha(); // Generate new captcha on failure
//     }
//   };

//   // Generate a new captcha when the component mounts
//   useEffect(() => {
//     generateCaptcha();
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center mb-6">CAPTCHA Verification</h1>

//         <div className="mb-4">
//           <label htmlFor="generatedCaptcha" className="block font-medium mb-2">
//             CAPTCHA:
//           </label>
//           <input
//             type="text"
//             id="generatedCaptcha"
//             className="w-full px-3 py-2 text-center text-lg font-bold bg-gray-200 rounded"
//             value={captcha}
//             readOnly
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="userInput" className="block font-medium mb-2">
//             Enter the CAPTCHA:
//           </label>
//           <input
//             type="text"
//             id="userInput"
//             className="w-full px-3 py-2 border border-gray-300 rounded"
//             value={userInput}
//             onChange={handleChange}
//           />
//         </div>

//         <button
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//           onClick={verifyCaptcha}
//         >
//           Verify
//         </button>

//         {resultMessage && (
//           <p
//             className={`mt-4 text-center font-bold ${
//               resultMessage.includes('matched') ? 'text-green-600' : 'text-red-600'
//             }`}
//           >
//             {resultMessage}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Captcha;
