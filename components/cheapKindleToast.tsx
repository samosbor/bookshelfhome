import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useCookies } from "react-cookie";

export default function cheapKindleToast() {
  let [cookies, setCookie, removeCookie] = useCookies(["kindleToastSeen"]);
  let modalOpen = true;
  if (cookies && cookies.kindleToastSeen) {
    modalOpen = false;
  } else {
    setCookie("kindleToastSeen", "seen");
    modalOpen = true;
  }
  let [isOpen, setIsOpen] = useState(modalOpen);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-20" />
          </Transition.Child>

          <div className="fixed inset-x-0 bottom-0 top-auto overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Need a Kindle?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Some really good deals right now on refurb Kindles
                    </p>
                  </div>
                  <div className="mt-4">
                    <a href="https://www.woot.com/plus/amazon-kindle-and-fire-tablets-15">
                      <button
                        type="button"
                        className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Take me there
                      </button>
                    </a>

                    <button
                      type="button"
                      className="float-right rounded-md border border-transparent bg-accent px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
