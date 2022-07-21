import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions"
export default function bookRequestForm() {
  let [requestsVisible, setRequestsVisible] = useState(false);
  const { width, height } = useWindowDimensions();
  if ( width != undefined && width > 768) {
    requestsVisible = true
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(event);

    const data = {
      title: event.target.title.value,
      author: event.target.author.value,
      format: event.target.title.value,
      notification: event.target.notification.checked,
      email: event.target.email.value,
      name: event.target.name.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/bookForm";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log(result);
  };
  return (
    <div>
      <div
        onClick={() =>
          setRequestsVisible((requestsVisible) => !requestsVisible)
        }
        className="mx-1 flex rounded-md bg-secondary p-4 drop-shadow-xl md:hidden"
      >
        <div className="flex p-3">
          <span className="text-2xl">Request a New Book </span>
        </div>
        <div className="ml-auto place-self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <Transition
        show={requestsVisible}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <form onSubmit={handleSubmit} method="POST">
          <div className="drop-shadow-xl">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="mb-3">
                <h3 className="text-gray-900 text-lg font-medium leading-6">
                  Request a book
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  I'll try to get it within a day or two
                </p>
              </div>

              <div className="grid auto-rows-max grid-cols-6 gap-6">
                <div className="col-span-6 flex-row sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="off"
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-6 col-start-1 sm:col-span-2">
                  <label
                    htmlFor="author"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    id="author"
                    autoComplete="on"
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="format"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    Format
                  </label>
                  <select
                    id="format"
                    name="format"
                    autoComplete="off"
                    className="border-gray-300 bg-white focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md border py-2 px-3 shadow-sm focus:outline-none sm:text-sm"
                  >
                    <option>eBook</option>
                    <option>Audiobook</option>
                    <option>Either is fine!</option>
                    <option>Both please!</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <div className="grid sm:grid-cols-4">
                    <div className="sm:col-span-1">
                      <h3 className="text-gray-900 text-lg font-medium leading-6">
                        Notifications
                      </h3>
                      <p className="text-gray-600 mt-1 text-sm">
                        Do you want to be notified when your book is ready?
                        Email might be easiest for automation in the future but
                        for now you can leave your name and I'll let you know.
                      </p>
                    </div>
                    <div className="my-4 sm:col-span-2 sm:mx-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="notification"
                            name="notification"
                            type="checkbox"
                            className="border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="notification"
                            className="text-gray-700 font-medium"
                          >
                            Get notified
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="text-gray-700 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full rounded-md shadow-sm sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 sm:text-left">
              <button
                type="submit"
                className="border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 inline-flex justify-center rounded-md border py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Transition>
    </div>
  );
}
