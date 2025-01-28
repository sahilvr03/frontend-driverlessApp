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
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { auth, db1 } from "../firebaseConfig/auth";
import {
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { ref, onDisconnect, onValue, set } from "firebase/database";
import { setCookie } from "cookies-next";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const isSigningUp = useRef(false);

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
          if (authUser) {
            const token = await authUser.getIdToken();
            setCookie("token", token, { maxAge: 60 * 60 * 24 });

            // Realtime DB references for online status
            const userStatusRef = ref(db1, `/status/${authUser.uid}`);
            const onlineStatus = {
              state: "online",
              last_changed: new Date().toISOString(),
            };
            const offlineStatus = {
              state: "offline",
              last_changed: new Date().toISOString(),
            };

            // Update status to online and set disconnect behavior
            set(userStatusRef, onlineStatus);
            onDisconnect(userStatusRef).set(offlineStatus);

            setUser({
              uid: authUser.uid,
              email: authUser.email,
              role: localStorage.getItem("Role"),
            });
          } else {
            setUser(null);
            setCookie("token", "", { maxAge: -1 });
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
    const userStatusRef = ref(db1, `/status/${user?.uid}`);
    await set(userStatusRef, {
      state: "offline",
      last_changed: new Date().toISOString(),
    });
    await auth.signOut();
    setUser(null);
    setCookie("token", "", { maxAge: -1 });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        logout,
        setIsSigningUp: (value) => {
          isSigningUp.current = value;
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
