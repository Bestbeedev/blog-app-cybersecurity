"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { FaRegAddressCard, FaRegCheckSquare } from "react-icons/fa";

export default function Contact() {
  const [agreed, setAgreed] = useState<boolean>(false);
  const handleChangeAgreed = () => {
    setAgreed(!agreed);
  };
  return (
    <div className="isolate bg-neutral-800 px-6 py-24 sm:py-32 lg:px-8">
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
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
          Contact sales
        </h2>
        <p className="mt-2 text-lg/8 text-neutral-300">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
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
      <form
        action="#"
        method="POST"
        className="mx-auto shadow-xl bg-gradient-to-l from-neutral-700 to-neutral-700 rounded-lg p-8 mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-neutral-50"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-neutral-600 outline-0 px-3.5 py-2 text-base text-neutral-100 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-neutral-500 focus:border focus:border-neutral-500  focus:text-neutral-200"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-neutral-50"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-neutral-600 outline-0 px-3.5 py-2 text-base text-neutral-100 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-neutral-500 focus:border focus:border-neutral-500  focus:text-neutral-200"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-neutral-50"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-neutral-600 outline-0 px-3.5 py-2 text-base text-neutral-100 outline -outline-offset-1 outline-gray-300 placeholder:text-neutral-100 focus:outline-neutral-500 focus:border focus:border-neutral-500  focus:text-neutral-200 "
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-neutral-50"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-neutral-600 outline-0 px-3.5 py-2 text-base text-neutral-100 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-neutral-500 focus:border focus:border-neutral-500  focus:text-neutral-200"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-neutral-50"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md space-x-2 bg-neutral-600  has-[input:focus-within]:outline has-[input:focus-within]:outline-1  has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-neutral-500 text-neutral-100 focus:border-neutral-500 focus:border ">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-neutral-100 bg-neutral-500   placeholder:text-neutral-300 focus:bg-neutral-500 hover:border-neutral-500 sm:text-sm/6 "
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow  pl-1 pr-3 text-neutral-100 placeholder:text-neutral-400 border-neutral-500  focus:outline-0 sm:text-sm/6  w-full rounded-md bg-neutral-600 outline-0 px-3.5 py-2 text-base outline -outline-offset-1 outline-gray-300  "
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-neutral-50"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-neutral-600 outline-0 px-3.5 py-2 text-base text-neutral-100 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-neutral-500 focus:border focus:border-neutral-500  focus:text-neutral-200"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex space-y-3 flex-col">
            <div className="flex space-x-2 items-center">
              <FaRegAddressCard className="text-neutral-50" />
              <div className="flex items-center ">

              <input
                type="checkbox"
                checked={agreed}
                onChange={handleChangeAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-neutral-600 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-neutral-600"
              />
              <span className="text-neutral-50">Agree to policies</span>
              </div>
            </div>
            <div className="flex text-neutral-50 space-x-2 h-6 items-center">
              <FaRegCheckSquare className="text-sm/6 text-neutral-50" />
            
              <a href="#" className="font-semibold text-sm/6 text-neutral-50">
                By selecting this, you agree to our  privacy&nbsp;policy
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
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
    </div>
  );
}
