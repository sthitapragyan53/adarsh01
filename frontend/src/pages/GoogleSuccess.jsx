import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");
    const redirect = params.get("redirect");

    if (token) {
      localStorage.setItem("token", token);
      navigate(redirect || "/home");
    } else {
      navigate("/login");
    }
  }, []);

  return <p>Signing you in...</p>;
}
