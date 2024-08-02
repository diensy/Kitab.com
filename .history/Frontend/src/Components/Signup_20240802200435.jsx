import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className=" border[2px]">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg ">Sign Up</h3>
            {/* Name */}
            <div className="mt-6 space-y-2">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                name="Name"
                placeholder="Enter your Full Name"
                className="w-80 border outline-none px-3 rounded-md"
              />
            </div>
            <div className="mt-6 space-y-2">
              {/* Email */}
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-80 border outline-none px-3 rounded-md"
              />
            </div>
            <div className="mt-6 space-y-2">
              {/* Password */}
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-80 border outline-none px-3 rounded-md"
              />
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-700 duration-300    cursor-pointer">
                Sign Up
              </button>
              <p>
                Have Account?{" "}
                <Link to="/" className="underline text-blue-500 cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
