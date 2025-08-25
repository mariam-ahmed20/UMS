import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const SignOut = () => {
  const { logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    toast.success("You have been signed out!");
    navigate("/login");
  }, []);

  return null;
};

export default SignOut;
