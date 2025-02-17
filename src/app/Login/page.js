"use client";
import React, { useState, useEffect } from "react";
import { auth, db, storage } from "../firebaseConfig/auth"; // Adjust path for Firebase config
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase storage functions
import { useRouter } from 'next/navigation';
import { useUser } from '../context/UserContext';
import { FaFacebookSquare, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";


const AuthForm = () => {
  const { setUser, setIsSigningUp } = useUser();
  const [isLogin, setIsLogin] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [profilePic, setProfilePic] = useState(null); // New state for profile pic
  const [error, setError] = useState("");

  const router = useRouter();

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    if (isLogin) {
      // Handle login
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const role = userData.role;
  
          setUser({ uid: user.uid, email: user.email, role });
          Swal.fire(role, "You have been successfully logged in.", "success");
          localStorage.setItem("Role", role);
          router.push('/');
        } else {
          setError("User role not found!");
        }
      } catch (error) {
        setError(error.message);
      }
    } else {
      // Handle signup
      try {
        setIsSigningUp(true);
        const newUserCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = newUserCredential.user;
        
        let profilePicUrl = "";
        if (profilePic) {
          // Upload profile picture to Firebase Storage
          const profilePicRef = ref(storage, `profilePictures/${newUser.uid}`);
          await uploadBytes(profilePicRef, profilePic);
          profilePicUrl = await getDownloadURL(profilePicRef);
        }

        // Save new user details to Firestore
        await setDoc(doc(db, "users", newUser.uid), {
          username: username,
          phonenumber: phonenumber,
          email: email,
          role: "user",
          profilePicUrl // Save profile picture URL
        });

        setIsSigningUp(false);
  
        Swal.fire({
          title: 'Success!',
          text: 'Account created successfully. Please log in.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
  
        toggleForm();
      } catch (error) {
        setError(error.message);
        setIsSigningUp(false);
      }
    }
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: "url('/images/one.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black bg-opacity-60">
        {isMobile ? (
          <div className="relative w-full max-w-md mx-auto">
            <div className={`bg-black my-4 text-white transition-all duration-700 flex items-center justify-center w-full`}>
              <h2 className="text-4xl font-bold">{isLogin ? "WELCOME BACK!" : "HELLO THERE!"}</h2>
            </div>

            <div className={`bg-white border-2 border-black rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-in-out`}>
              <form className="w-full p-4" onSubmit={handleSubmit}>
                {isLogin ? (
                  <>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                    <h2 className="text-3xl font-bold mb-4">Login</h2>

                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-black hover:bg-primary text-white font-bold py-2 rounded focus:outline-none"
                    >
                      Login
                    </button>
                    {/* <div className="flex justify-center mt-4">
                      <FaFacebookSquare className="w-8 h-8 mx-2 cursor-pointer" />
                      <FcGoogle className="w-8 h-8 mx-2 cursor-pointer" />
                      <FaApple className="w-8 h-8 mx-2 cursor-pointer" />
                    </div> */}
                    <p className="text-center text-sm mt-4">
                      Dont have an account?{" "}
                      <span
                        onClick={toggleForm}
                        className="text-blue-500 cursor-pointer hover:underline"
                      >
                        Sign Up
                      </span>
                    </p>

                  </>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Username
                      </label>
                      <input
                        type="username"
                        id="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Phonenumber
                      </label>
                      <input
                        type="phonenumber"
                        id="phonenumber"
                        placeholder="phonenumber"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-black hover:bg-primary text-white font-bold py-2 rounded focus:outline-none"
                    >
                      Sign Up
                    </button>
                    {/* <div className="flex justify-center mt-4">
                      <FaFacebookSquare className="w-8 h-8 mx-2 cursor-pointer" />
                      <FcGoogle className="w-8 h-8 mx-2 cursor-pointer" />
                      <FaApple className="w-8 h-8 mx-2 cursor-pointer" />
                    </div> */}
                    <p className="text-center text-sm mt-4">
                      Already have an account?{" "}
                      <span
                        onClick={toggleForm}
                        className="text-blue-500 cursor-pointer hover:underline"
                      >
                        Login
                      </span>
                    </p>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                  </>
                )}
              </form>
            </div>
          </div>
        ) : (
          // Desktop version
          <div className="relative w-full max-w-[900px] h-[600px] bg-white border-2 border-black rounded-lg shadow-lg overflow-hidden flex">
            <div className={`w-1/2 h-full bg-white flex flex-col justify-center items-center px-8 transition-transform duration-700 ease-in-out z-20 ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}>
              <h2 className="text-3xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
              <form className="w-full" onSubmit={handleSubmit}>
                {isLogin ? (
                  <>

                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-black hover:bg-primary text-white font-bold py-2 rounded focus:outline-none"
                    >
                      Login
                    </button>

                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                  </>
                ) : (
                  <><div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Username
                    </label>
                    <input
                      type="username"
                      id="username"
                      placeholder="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                      required
                    />
                  </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Phonenumber
                      </label>
                      <input
                        type="phonenumber"
                        id="phonenumber"
                        placeholder="phonenumber"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mb-6">
                {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePic">
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="profilePic"
                  onChange={(e) => setProfilePic(e.target.files[0])}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                /> */}
              </div>
                    <button
                      type="submit"
                      className="w-full bg-black hover:bg-primary text-white font-bold py-2 rounded focus:outline-none"
                    >
                      Sign Up
                    </button>

                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                  </>
                )}
              </form>
            </div>

            <div className={`w-1/2 h-full flex items-center justify-center text-center px-8 transition-transform duration-700 ease-in-out bg-black text-white z-10 ${isLogin ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="relative">
                <h2 className="text-4xl font-bold mb-2">{isLogin ? "WELCOME BACK!" : "HELLO THERE!"}</h2>
                <p className="text-lg mb-4">{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                <button
                  className="bg-transparent border-2 border-white text-white font-bold py-2 px-6 rounded focus:outline-none"
                  onClick={toggleForm}
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
                {/* <div className="flex justify-center mt-4">
                  <FaFacebookSquare className="w-8 h-8 mx-2 cursor-pointer" />
                  <FcGoogle className="w-8 h-8 mx-2 cursor-pointer" />
                  <FaApple className="w-8 h-8 mx-2 cursor-pointer" />
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
