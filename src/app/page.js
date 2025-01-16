// Home.js
import LandingPage from "./landingPage/page";
import { UserProvider } from './context/UserContext';

export default function Home() {
  return (
    <UserProvider>
      <LandingPage />
    </UserProvider>
  );
}
