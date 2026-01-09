import { AuthProvider } from "../../context/AuthContext";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <>
      <AuthProvider>

      <Navbar />
      </AuthProvider>
    </>
  );
};
