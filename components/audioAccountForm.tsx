import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function audioAccountForm() {
  let [success, setSuccess] = useState(false);
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      contact: event.target.contact.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/audioAccountCreate";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    console.log(response);
    if (response && response.status == 200) {
      setSuccess(true);
    }
    const result = await response.json();
  };
  return (
    <div className="mb-8 md:mb-0">
      <form onSubmit={handleSubmit} method="POST">
        <div className="drop-shadow-xl">
          <div className="rounded-t-lg bg-white px-4 py-5 sm:p-6">
            <div className="mb-3 rounded-lg">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Get an audio account
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                I've got a bunch of audiobooks. Put your name down and you'll be
                sent the login details.
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Or you can use Username: guest Password: osborne
              </p>
            </div>

            <div className="grid auto-rows-max grid-cols-6 gap-6">
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

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact
                </label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="rounded-b-lg bg-gray-50 px-4 py-3 text-right sm:px-6 sm:text-left">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-primary-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <Transition
        show={success}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="pointer-events-auto mx-auto mt-8 mb-3 block w-96 max-w-full rounded-lg bg-info bg-clip-padding text-sm shadow-lg">
          <div className="flex items-center justify-between rounded-t-lg border-b border-blue-200 bg-info bg-clip-padding py-2 px-3">
            <p className="flex items-center font-bold">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="check-circle"
                className="mr-2 h-4 w-4 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                ></path>
              </svg>
              Success
            </p>
          </div>
          <div className="break-words rounded-b-lg bg-info p-3">
            I'll create your account and send you the login
          </div>
        </div>
      </Transition>
    </div>
  );
}
