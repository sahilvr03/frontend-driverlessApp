"use client";
import { useRouter } from 'next/navigation';
import { useUser } from '../context/UserContext';
import { useEffect } from 'react';
import Loader from '../components/loader/loader';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    const role_from_local_storage = localStorage.getItem("Role");

    if (!isLoading) {
      if (!user) {
        // If not authenticated, redirect to home page
        router.push('/');
      } else if (allowedRoles.length && !allowedRoles.includes(role_from_local_storage)) {
        // If user's role is not in the allowedRoles array, redirect to unauthorized page
        router.push('/unauthorized');
      }
    }
  }, [user, isLoading, router, allowedRoles]);

  if (isLoading) {
    return <Loader/>; // Show loading while checking auth status
  }

  return user ? children : null;
};

export default ProtectedRoute;
