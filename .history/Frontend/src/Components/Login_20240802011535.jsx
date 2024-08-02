import React from "react";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg ">Login</h3>
          <div className="mt-6 space-y-2">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your emaill"
              className="w-80 border outline-none px-3 rounded-md"
            />
          </div>
          <div className="mt-6 space-y-2">
            <label htmlFor="email">Password</label>
            <br />
            <input
              type="password"
              name="email"
              placeholder="Enter your password"
              className="w-80 border outline-none px-3 rounded-md"
            />
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-700 duration-300    cursor-pointer">
              Login
            </button>
            <p>
              Not Registered? <span>Sign Up
                
              </span>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
