import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Logout = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = false;
  useEffect(() => {
    axios
      .get(`https://mern-books-library-backend.onrender.com/logout`)
      .then((res) => {
        if (res.data.status === "Success") {
          if (res.data.role === "admin" || res.data.role === "visitor") {
            window.localStorage.clear();
            navigate("/");
          } else {
            alert("user found,you are login ");
            navigate("/Home");
          }
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="p-24">
      {/* {alert("you are logged out")}
      {navigate("/")} */}
    </div>
  );
};

export default Logout;
