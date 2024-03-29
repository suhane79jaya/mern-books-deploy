import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Typography } from "@mui/material";
import lib from "/LibraryImages/lib1.webp";
import img from "/LibraryImages/background.gif";
const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  axios.defaults.withCredentials = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mern-books-library-backend.onrender.com/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log("signup res", res);
        enqueueSnackbar(
          "Signup successfully,now login with the same signup details",
          { variant: "success" }
        );
        navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };
  return (
    <>
      {" "}
      <div style={{ backgroundImage: `url(${img})` }}>
        <div className="flex flex-col max-w-md mx-80 my-28 px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <Typography>
            <span>W</span>elcome<span>T</span>o<span>B</span>ook<span>S</span>
            helf Application
          </Typography>
          <img src={lib} alt="libraryImage"></img>
          <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
            Create a new account
          </div>
          <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Already have an account ?
            <Link
              to="/"
              className="text-sm text-blue-500 underline hover:text-blue-700"
            >
              Log in
            </Link>
          </span>
          <div className="p-6 mt-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label>
                    <strong>Name</strong>
                  </label>
                  <input
                    type="text"
                    id="create-account-pseudo"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="name"
                    //value={user.name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="FullName"
                  />
                </div>
              </div>
              <div className="flex gap-4 mb-2">
                <div className=" relative ">
                  <label>
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    id="create-account-email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label>
                    <strong>Password</strong>
                  </label>
                  <input
                    type="password"
                    id="create-account-password"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="flex w-full my-4">
                <button
                  type="submit"
                  className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
