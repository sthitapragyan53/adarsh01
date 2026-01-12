import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PublicRoute({ children }) {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setChecking(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          setIsLoggedIn(true);
        }
      } catch (err) {
        setIsLoggedIn(false);
      } finally {
        setChecking(false);
      }
    };

    checkUser();
  }, []);

  if (checking) return null;

  if (isLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
