import React, { useState } from "react";
import logo from "../assets/icons/alba-logo.svg";
import { post } from "../services/service";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [data, setData] = useState();
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    post
      .postLogin(data)
      .then((response) => setToken(response))
      .catch((error) => console.error(error));

    token?.token && navigate(`/profilePage/${token.token}`);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 container mx-auto px-8 mb-80 mt-40">
        <div className="">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="text-center text-2xl font-medium text-stroke mt-2">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-mediumtext-stroke"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-stroke ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, password: e.target.value }))
                  }
                  className="block w-full rounded-md px-2 border-0 py-1.5 text-stroke ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-stroke shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
