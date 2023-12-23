/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import paslon1 from "../assets/img/paslon1.png";
// import paslon2 from "../assets/img/paslon2.png";
// import Footer from './Footer';

const LoginModal = () => {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const openModal = () =>  setIsOpen(true);


  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nim, password }),
      });

      if (response.ok) {
        console.log('Login successful');
        // Handle successful login, e.g., redirect or show a success message
      } else {
        console.error('Login failed');
        // Handle failed login, e.g., show an error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <div className="modal-box bg-white" >
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    ✕
                                </button>
                            </form>
                            <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                                <h2 className="text-2xl font-light text-black mb-5 text-center">
                                    LOGIN
                                </h2>
                                <div className="mb-4">
                                    <input
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        id="username"
                                        type="text"
                                        placeholder="NIM"
                                        value={nim}
                                        onChange={(e) => setNim(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        className="bg-white shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <a
                                        className="text-white w-96 ml-2 bg-primary hover:bg-orange-600 font-medium rounded-lg text-base flex items-center px-3 py-2.5 text-center mr-2"
                                        onClick={() => {
                                            // Prevent default link behavior
                                            handleLogin();
                                        }}
                                    >
                                        <p className="flex items-center m-auto">
                                            Login
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className="w-full m-auto h-10 flex bg-slate-400 rounded-md">
                                <h2 className="text-xs text-slate-600 flex items-center m-auto ">
                                    Pemira BEM 2023
                                </h2>
                            </div>
                        </div>
   
  );
};

export default LoginModal;