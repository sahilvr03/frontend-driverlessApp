"use client";
import { useState, useEffect } from 'react';
import { useUser } from "../../context/UserContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig/auth';
import { PencilIcon, CheckIcon, XIcon, UserIcon, PhoneIcon, MailIcon, BookmarkIcon, UsersIcon, CalendarIcon } from "@heroicons/react/outline";

export default function ProfileCard() {
  const [bio, setBio] = useState('');
  const [inputBio, setInputBio] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: '',
    phonenumber: '',
    email: ''
  });
  const { user } = useUser();

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUserInfo((prevState) => ({
        ...prevState,
        name: savedUsername
      }));
    }
  }, []);
  

  useEffect(() => {
    if (!user) return;
  
    const fetchUserInfo = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const data = docSnap.data();
          const fetchedUsername = data.username || 'Name not available';
  
          // Update state and store username in localStorage
          setBio(data.bio || '');
          setUserInfo({
            name: fetchedUsername,
            number: data.phonenumber || 'Phone not available',
            email: data.email || 'Email not available'
          });
  
          // Save username to localStorage
          localStorage.setItem('username', fetchedUsername);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
  
    fetchUserInfo();
  }, [user]);
  

  const handleBioUpdate = async () => {
    try {
      if (!user) return;
      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, { bio: inputBio }, { merge: true });
      setBio(inputBio);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating bio:", error);
    }
  };

  return (<>
    <div className="max-w-sm mx-auto bg-gray-800  text-white rounded-lg shadow-md overflow-hidden p-6 sticky">
      <div className="flex items-center space-x-4">
        <UserIcon className="h-12 w-12 text-gray-400" />
        <div>
          <h2 className="text-2xl font-semibold">{userInfo.name}</h2>
          <div className="flex items-center text-gray-400 space-x-1">
            <MailIcon className="h-4 w-4" />
            <p>{userInfo.email}</p>
          </div>
          <div className="flex items-center text-gray-400 space-x-1">
            <PhoneIcon className="h-4 w-4" />
            <p>{userInfo.number}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="font-semibold text-gray-200">Bio</h3>
        {isEditing ? (
          <div>
            <textarea
              className="w-full border border-gray-600 bg-gray-700 text-white rounded-lg p-2 mt-2"
              rows="3"
              value={inputBio}
              onChange={(e) => setInputBio(e.target.value)}
              placeholder="Enter your bio here..."
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg flex items-center"
              onClick={handleBioUpdate}
            >
              <CheckIcon className="h-5 w-5 mr-1" /> Save Bio
            </button>
            <button
              className="text-gray-400 ml-2 flex items-center"
              onClick={() => setIsEditing(false)}
            >
              <XIcon className="h-5 w-5 mr-1" /> Cancel
            </button>
          </div>
        ) : (
          <div className="mt-2 text-gray-400">
            <p>{bio || "No bio available"}</p>
            <button
              className="text-blue-400 text-sm mt-2 flex items-center"
              onClick={() => {
                setInputBio(bio);
                setIsEditing(true);
              }}
            >
              <PencilIcon className="h-4 w-4 mr-1" />
              {bio ? "Edit Bio" : "Add Bio"}
            </button>
          </div>
        )}
      </div>
      
      
    </div>
    <div className="max-w-sm mx-auto mt-4 bg-gray-800 text-white rounded-lg shadow-md overflow-hidden p-6 sticky">
      
      
      <div className="mt-4">
        <h3 className="font-semibold text-gray-200">Links</h3>
        <ul className="space-y-2 mt-2">
          <li className="flex items-center text-blue-400">
            <BookmarkIcon className="h-5 w-5 mr-2" /> Saved items
          </li>
          <li className="flex items-center text-blue-400">
            <UsersIcon className="h-5 w-5 mr-2" /> Groups
          </li>
          <li className="flex items-center text-blue-400">
            <CalendarIcon className="h-5 w-5 mr-2" /> Events
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}