"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebaseConfig/auth"; // Ensure this points to your correct Firebase config
import AdminSidebar from "@/app/components/adminSidebar/page";
import Swal from "sweetalert2"; // SweetAlert2 for confirmation dialog

const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Track user being edited
  const [newUserData, setNewUserData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    role: "",
  }); // Form data for editing

  // Fetch users from Firestore
  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userData = [];
      querySnapshot.forEach((doc) => {
        userData.push({ ...doc.data(), id: doc.id });
      });
      setUsers(userData);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdateUser = async (e, userId) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "users", userId), {
        username: newUserData.username,
        email: newUserData.email,
        phonenumber: newUserData.phonenumber,
        role: newUserData.role,
      });
  
      setUsers(users.map(user => (user.id === userId ? { ...newUserData, id: userId } : user)));
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  const handleDelete = async (userId, username) => {
    const result = await Swal.fire({
      title: `Do you want to delete the user: ${username}?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });
  
    if (result.isConfirmed) {
      try {
        // Call the Next.js API route to delete user from Firebase Auth
        const response = await fetch("/api/deleteUser", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }), // Sending userId instead of authId
        });
  
        if (!response.ok) {
          throw new Error("Failed to delete user from Firebase Auth");
        }
  
        // If successful, delete from Firestore
        await deleteDoc(doc(db, "users", userId));
        setUsers(users.filter((user) => user.id !== userId));
        Swal.fire("Deleted!", `User ${username} has been deleted.`, "success");
  
      } catch (error) {
        console.error("Error deleting user: ", error);
        Swal.fire("Error!", "There was a problem deleting the user.", "error");
      }
    }
  };
  
  const handleEdit = (user) => {
    setEditingUser(user.id);
    setNewUserData({
      username: user.username,
      email: user.email,
      phonenumber: user.phonenumber,
      role: user.role,
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <div className="container mx-auto py-4">
        <h1 className="text-3xl font-bold mb-6 text-center">User Information</h1>

        {editingUser && (
          <div className="my-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Edit User Information</h2>
            <form onSubmit={(e) => handleUpdateUser(e, editingUser)}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={newUserData.username}
                  onChange={(e) => setNewUserData({ ...newUserData, username: e.target.value })}
                  placeholder="Username"
                  required
                />
                <input
                  className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  value={newUserData.email}
                  onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                  placeholder="Email"
                  required
                />
                <input
                  className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={newUserData.phonenumber}
                  onChange={(e) => setNewUserData({ ...newUserData, phonenumber: e.target.value })}
                  placeholder="Phone Number"
                  required
                />
                <input
                  className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={newUserData.role}
                  onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })}
                  placeholder="Role"
                  required
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">Save</button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
                  onClick={() => setEditingUser(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 border-b">UID</th>
                <th className="py-3 px-4 border-b">Username</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Phone Number</th>
                <th className="py-3 px-4 border-b">Role</th>
                <th className="py-3 px-4 border-b">Status</th>
                <th className="py-3 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                
                >
                  <td className="py-2 px-4 border-b">{user.id}</td>
                  <td className="py-2 px-4 border-b">{user.username}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.phonenumber}</td>
                  <td className="py-2 px-4 border-b">{user.role}</td>
                  <td
                  className={`py-2 px-4 border-b hover:bg-gray-100 ${
                    user.status === "online" ? "bg-green-400 text-cyan-50" : "bg-gray-100"
                  }`}
                >
                  {user.status === "online" ? "Online" : "Offline"}
                </td>

                  <td className="py-2 px-4 border-b flex space-x-2">
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
                      onClick={() => handleDelete(user.id, user.username)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
