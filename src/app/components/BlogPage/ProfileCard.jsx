"use client";
import { useState, useEffect } from 'react';
import { useUser } from "../../context/UserContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig/auth';
import { PencilIcon, CheckIcon, XIcon, UserIcon, PhoneIcon, MailIcon, BookmarkIcon, UsersIcon, CalendarIcon, CameraIcon } from "@heroicons/react/outline";

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
    if (!user) return;

    const fetchUserInfo = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setBio(data.bio || '');
          setUserInfo({
            username: data.username || 'Unknown User',
            phonenumber: data.phonenumber || 'N/A',
            email: data.email || 'N/A'
          });
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

  return (
    <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden p-6 relative">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
            <UserIcon className="h-12 w-12 text-gray-400" />
          </div>
          <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md">
            <CameraIcon className="h-5 w-5" />
          </button>
        </div>
        <h2 className="text-2xl font-bold mt-3">{userInfo.username}</h2>
        <div className="text-gray-400 text-sm">
          <div className="flex items-center justify-center mt-2">
            <MailIcon className="h-4 w-4 mr-1" /> {userInfo.email}
          </div>
          <div className="flex items-center justify-center mt-1">
            <PhoneIcon className="h-4 w-4 mr-1" /> {userInfo.phonenumber}
          </div>
        </div>
      </div>

      <div className="mt-6">
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
            <div className="flex space-x-2 mt-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
                onClick={handleBioUpdate}
              >
                <CheckIcon className="h-5 w-5 mr-1" /> Save
              </button>
              <button
                className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg flex items-center"
                onClick={() => setIsEditing(false)}
              >
                <XIcon className="h-5 w-5 mr-1" /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-2 text-gray-400">
            <p>{bio || "No bio available"}</p>
            <button
              className="text-blue-400 text-sm mt-2 flex items-center hover:underline"
              onClick={() => {
                setInputBio(bio);
                setIsEditing(true);
              }}
            >
              <PencilIcon className="h-4 w-4 mr-1" /> {bio ? "Edit Bio" : "Add Bio"}
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4">
        <h3 className="font-semibold text-gray-200">Quick Links</h3>
        <ul className="space-y-3 mt-3">
          <li className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer">
            <BookmarkIcon className="h-5 w-5 mr-2" /> Saved Items
          </li>
          <li className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer">
            <UsersIcon className="h-5 w-5 mr-2" /> Groups
          </li>
          <li className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer">
            <CalendarIcon className="h-5 w-5 mr-2" /> Events
          </li>
        </ul>
      </div>
    </div>
  );
}