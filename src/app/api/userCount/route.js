// src/app/api/getUserCount/route.js
import { admin } from '../../firebaseConfig/admin';

export async function GET() {
  try {
    const userRecords = await admin.auth().listUsers();
    const userCount = userRecords.users.length; // Get the number of users
    return new Response(JSON.stringify({ count: userCount }), { status: 200 });
  } catch (error) {
    console.error("Error fetching user count:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch user count", error: error.message }), { status: 500 });
  }
}
