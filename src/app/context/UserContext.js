// "use client";
// import { createContext, useContext, useState, useEffect, useRef } from 'react';
// import { auth } from '../firebaseConfig/auth'; 
// import { onAuthStateChanged } from "firebase/auth";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const isSigningUp = useRef(false); // Use ref instead of state

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (authUser) => {
//       if (authUser) {
//         // Only set user data if not signing up
//         if (!isSigningUp.current) {
//           setUser({
//             uid: authUser.uid,
//             email: authUser.email,
//           });
//         }
//       } else {
//         setUser(null);
//       }
//       setIsLoading(false);
//     });

//     return () => unsubscribe();
//   }, []); // Removed isSigningUp from dependency array

//   const logout = async () => {
//     await auth.signOut();
//     setUser(null);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, isLoading, logout, setIsSigningUp: (value) => { isSigningUp.current = value; } }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);


"use client";
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { auth } from '../firebaseConfig/auth'; 
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth"; // Import persistence
import { setCookie } from 'cookies-next';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);1
  const [isLoading, setIsLoading] = useState(true);
  const isSigningUp = useRef(false);

  useEffect(() => {
    // Set persistence to local storage
    setPersistence(auth, browserLocalPersistence) // Ensure persistence
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
          if (authUser) {
            if (!isSigningUp.current) {
              setUser({
                uid: authUser.uid,
                email: authUser.email,
                role: localStorage.getItem("Role")
              });
              // Wait for the token before setting the cookie
              const token = await authUser.getIdToken();
              setCookie('token', token, { maxAge: 60 * 60 * 24 }); // Token valid for 1 day
            }
          } else {
            setUser(null);
            // Remove token from cookies on logout
            setCookie('token', '', { maxAge: -1 });
          }
          setIsLoading(false);
        });

        return () => unsubscribe();
      })
      .catch((error) => {
        console.error("Error setting persistence: ", error);
        setIsLoading(false);
      });
  }, []);

  const logout = async () => {
    await auth.signOut();
    setUser(null);
    // Remove token on logout
    setCookie('token', '', { maxAge: -1 });
  };

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, logout, setIsSigningUp: (value) => { isSigningUp.current = value; } }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);


