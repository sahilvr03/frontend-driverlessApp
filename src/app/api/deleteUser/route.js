import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const db = getFirestore();

export async function DELETE(req) {
  try {
    const { userId } = await req.json(); // Changed authId to userId

    // Validate userId
    if (!userId || typeof userId !== "string" || userId.length > 128) {
      throw new Error("Invalid userId: must be a non-empty string with at most 128 characters.");
    }

    // Delete user from Firebase Authentication
    await getAuth().deleteUser(userId);

    // Delete user document from Firestore
    await db.collection("users").doc(userId).delete();

    return new Response(JSON.stringify({ message: "User deleted from Auth and Firestore" }), { status: 200 });
  } catch (error) {
    console.error("Error deleting user:", error);
    return new Response(JSON.stringify({ message: "Failed to delete user", error: error.message }), { status: 500 });
  }
}
