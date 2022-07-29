import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useSWRConfig } from "swr";
import recentRequests from "./recentRequests";

export default function bookRequestForm(width: number | undefined) {
  const { mutate } = useSWRConfig();
  let [requestsVisible, setRequestsVisible] = useState(false);

  if (width != undefined && width > 768) {
    requestsVisible = true;
  }

  function getRequestDropArrowClass() {
    if (requestsVisible) {
      return "ml-auto place-self-end p-2 rotate-90";
    } else {
      return "ml-auto place-self-end p-2";
    }
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      author: event.target.author.value,
      format: event.target.format.value,
      notification: event.target.notification.checked,
      anonymous: event.target.anonymous.checked,
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

    const response = await fetch(endpoint, options);
    const result = await response.json();
    mutate("/api/requests/create");
  };
  return (
    <div className="mb-8 md:mb-0">
      <div
        onClick={() => {
          setRequestsVisible((requestsVisible) => !requestsVisible);
        }}
        className="mb-8 flex rounded-md bg-secondary p-4 drop-shadow-xl md:mb-0 md:hidden"
      >
        <div className="flex p-3">
          <span className="text-2xl font-semibold">Request a New Book </span>
        </div>
        <div className={getRequestDropArrowClass()}>
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
              d="M9 5l7 7-7 7"
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
            <div className="rounded-t-lg bg-white px-4 py-5 sm:p-6">
              <div className="mb-3 rounded-lg">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Request a book
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  I'll try to get it within a day or two
                </p>
              </div>

              <div className="grid auto-rows-max grid-cols-6 gap-6">
                <div className="col-span-6 flex-row sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="off"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 col-start-1 sm:col-span-2">
                  <label
                    htmlFor="author"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    id="author"
                    autoComplete="on"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="format"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Format
                  </label>
                  <select
                    id="format"
                    name="format"
                    autoComplete="off"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-primary-400 sm:text-sm"
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
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Notifications
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
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
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-400"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="notification"
                            className="font-medium text-gray-700"
                          >
                            Get notified
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <div className="my-4 sm:col-span-2">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="anonymous"
                          name="anonymous"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-400"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="anonymous"
                          className="font-medium text-gray-700"
                        >
                          Anonymous
                        </label>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Don't show in recent list
                    </div>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-b-lg bg-gray-50 px-4 py-3 text-right sm:px-6 sm:text-left">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-primary-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>

        <div className="mx-[-1rem] sm:mx-0">{recentRequests()}</div>
      </Transition>
    </div>
  );
}
