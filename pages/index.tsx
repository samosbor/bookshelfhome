import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import bookRequestForm from "./bookRequestForm";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>the osborne bookshelf</title>
        <style>{'body { background-color: #f9fafb; }'}</style>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-white drop-shadow-xl">
        <div className="flex py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start px-4 sm:px-6">
            <span className="text-2xl">the osborne bookshelf</span>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3">
        {/* <!-- left column --> */}
        <div className="col-span-1">
          <div className="max-w-sm p-4">
            <a href="https://audio.theosbornebookshelf.com/">
              <div className="m-0 flex rounded-md bg-white p-4 drop-shadow-xl">
                <div className="flex-no-shrink">
                  <Image
                    alt="audiobooks"
                    src="/img/audiobookshelf.png"
                    width={64} height={64}
                  />
                </div>
                <div className="p-3">
                  <span className="text-2xl">audiobooks</span>
                </div>
              </div>
            </a>
          </div>

          <div className="max-w-sm p-4">
            <a href="https://books.theosbornebookshelf.com/">
              <div className="m-0 flex rounded-md bg-white p-4 drop-shadow-xl">
                <div className="flex-no-shrink">
                  <Image
                    alt="books"
                    src="/img/calibre.PNG"
                    width={64} height={64}
                  />
                </div>
                <div className="p-3">
                  <span className="text-2xl">ebooks</span>
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
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
