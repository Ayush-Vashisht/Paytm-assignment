import { useState } from "react";
import "@dotlottie/player-component";
import axios from "axios";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [user, setUser] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      await axios.post("/api/v1/user/signup", {
        email,
        password,
        firstName,
        lastName,
      });
      //   setUser(true);
      alert("Registration succesful. Now you can log in");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mx-auto h-40 w-auto">
            <dotlottie-player
              src="https://lottie.host/7425ff3c-a9c5-4968-8aa4-26920dd41df1/ShlzulYoFY.json"
              autoplay
              direction="1"
              speed={0.5}
              background="transparent"
              mode="normal"
              loop
            />
          </div>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2 " onSubmit={handleSubmit}>
            <div>
              <label
                type="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    handleEmailChange(e);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"
                />
              </div>
            </div>
            <div>
              <label
                type="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    handleFirstNameChange(e);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"
                />
              </div>
            </div>
            <div>
              <label
                type="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    handleLastNameChange(e);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"
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
                  value={password}
                  onChange={(e) => {
                    handlePasswordChange(e);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            Already a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
