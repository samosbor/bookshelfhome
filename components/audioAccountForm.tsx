import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function audioAccountForm() {
  let [success, setSuccess] = useState(false);

  function closeModal() {
    setSuccess(false);
  }

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
      <Transition appear show={success} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Success
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      I'll create your account and send you the login
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
