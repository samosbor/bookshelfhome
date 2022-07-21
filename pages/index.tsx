import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import bookRequestForm from "../components/bookRequestForm";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>bookshelf</title>
        <style>{"body { background-color: white; }"}</style>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-base-100 drop-shadow-xl">
        <div className="flex justify-start py-6 px-4 sm:px-6">
          <span className="text-2xl">the&nbsp;</span>
          <span className="text-2xl font-bold text-primary">osborne</span>
          <span className="text-2xl">&nbsp;bookshelf</span>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3">
        {/* <!-- left column --> */}
        <div className="col-span-1">
          <div className="max-w-sm p-4">
            <a href="https://audio.theosbornebookshelf.com/">
              <div className="m-0 flex rounded-md bg-secondary p-4 drop-shadow-xl">
                <div className="flex-no-shrink">
                  <Image
                    alt="audiobooks"
                    src="/img/audiobookshelf.png"
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
                    src="/img/calibre.PNG"
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
              <div className="border-gray-200 border-t"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
