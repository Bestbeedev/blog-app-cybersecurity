
import { useState } from "react";
import useAuth from "@/hooks/AuthUser/Auth";
import { Link } from "react-router-dom";

export default function Signup() {
  const { signup, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(username,email, password);
  };

  return (
    <div className="bg-neutral-800 h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-10 bg-neutral-700 rounded-lg"
          >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-8 text-center text-2xl/9 font-bold tracking-tight text-neutral-200">
                Sign up to your account
              </h2>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-neutral-200"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md bg-neutral-600 outline-0 px-3.5 py-2 text-base text-neutral-100 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-neutral-500 focus:border focus:border-neutral-500  focus:text-neutral-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-neutral-200"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-neutral-600 outline-0 px-3.5 py-2 text-base text-neutral-100 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-neutral-500 focus:border focus:border-neutral-500  focus:text-neutral-200"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-neutral-200"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-neutral-600 outline-0 px-3.5 py-2 text-base text-neutral-100 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-neutral-500 focus:border focus:border-neutral-500  focus:text-neutral-200"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-neutral-600 border border-neutral-300 rounded focus:ring-neutral-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm/6 text-neutral-200"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-semibold text-blue-500 hover:text-blue-600"
                >
                  Sign in
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? "Sign up..." : "Sign up"}
              </button>
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <hr className="w-1/4 border-neutral-400" />
              <span className="text-sm/6 text-neutral-200">
                Or continue with
              </span>
              <hr className="w-1/4 border-neutral-400" />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="flex items-center justify-center w-full rounded-md bg-neutral-600  px-3 py-1.5 text-sm/6 font-semibold text-neutral-100 shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 border-neutral-400 border"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                  alt="Google"
                  className="h-5 w-5 mr-2"
                />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-full rounded-md bg-neutral-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 ml-4 border-neutral-400 border"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub"
                  className="h-5 w-5 mr-2"
                />
                GitHub
              </button>
            </div>
          </form>

          {error && (
            <p className="mt-2 text-center text-sm/6 text-red-500">{error}</p>
          )}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
