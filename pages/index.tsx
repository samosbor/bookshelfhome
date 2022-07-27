import type { NextPage } from "next";
import Image from "next/image";
import bookRequestForm from "../components/bookRequestForm";
import header from "../components/header";
import recentRequests from "../components/recentRequests";

const Home: NextPage = (props) => {
  return (
    <div className="min-h-screen">
      {header()}
      <div className="md:grid md:grid-cols-3">
        {/* <!-- left column --> */}
        <div className="col-span-1">
          <div className="max-w-sm p-4">
            <a href="https://audio.theosbornebookshelf.com/">
              <div className="m-0 flex rounded-md bg-secondary p-4 drop-shadow-xl">
                <div className="flex-no-shrink">
                  <Image
                    alt="audiobooks"
                    src="/audiobookshelf.png"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="p-3">
                  <span className="text-2xl">Audiobooks</span>
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <div className="max-w-sm p-4">
            <a href="https://books.theosbornebookshelf.com/">
              <div className="m-0 flex rounded-md bg-secondary p-4 drop-shadow-xl">
                <div className="flex-no-shrink">
                  <Image
                    alt="books"
                    src="/calibre.png"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="p-3">
                  <span className="text-2xl">eBooks</span>
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </a>
            <a href="/setup" className="flex justify-end pt-2">
              <div className="text-primary-300">
                Guide: Put books on your Kindle
              </div>
              <div className="place-self-center pl-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* <!-- request panel --> */}

        <div className="col-span-2">
          <div className="mt-10 pt-2 sm:mt-0">
            <div className="mx-4">
              <div className="md:col-span-2 md:mt-0">{bookRequestForm()}</div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>

          <div>{recentRequests()}</div>
        </div>
      </div>
      <footer className="sticky top-[100vh] flex items-center justify-between rounded-lg bg-white p-4 shadow md:p-6">
        <span className="text-sm text-primary-200">For friends and family</span>
        <span className="text-sm text-primary-200">
          <a href="http://bookshelfadmin.jk">Admin</a>
        </span>
      </footer>
    </div>
  );
};

export default Home;
