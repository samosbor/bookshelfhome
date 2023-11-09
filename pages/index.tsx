import type { NextPage } from "next";
import Image from "next/image";
import bookRequestForm from "../components/bookRequestForm";
import footer from "../components/footer";
import header from "../components/header";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Div100vh from "../components/div100vh";
import recentReviews from "../components/recentReviews";
import cheapKindleToast from "../components/cheapKindleToast";

const Home: NextPage = (props) => {
  const { width, height } = useWindowDimensions();
  return (
    <Div100vh>
      {header()}
      <div className="md:grid md:grid-cols-3">
        {/* <!-- left column --> */}
        <div className="col-span-1">
          <div className="p-4 md:max-w-sm">
            <a href="https://books.osbornefam.org/">
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
                  <span className="text-2xl font-semibold tracking-tight">
                    eBooks
                  </span>
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

          <div className="p-4 md:max-w-sm">
            <p>
              Ok, i've been messing with the email settings trying to get them
              right for send-to-kindle.
            </p>
            <p>Here's what you need to do</p>
            <p>
              Change your kindle's send-to-kindle email address to something
              super unique. Like, not your first and last name. Make it like
              numbers and special characters
            </p>
            <p>Then, allow send-to-kindle emails from sam@osbornefam.org</p>
            <p>lmk if it doesnt work</p>
          </div>

          <div className="p-4 md:max-w-sm">
            <a href="https://audio.osbornefam.org/">
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
                  <span className="text-2xl font-semibold tracking-tight">
                    Audiobooks
                  </span>
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
            <a href="/audioSetup" className="flex justify-end pt-2">
              <div className="text-primary-300">Get an audio account</div>
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
          <div className="m-4 mt-20 pt-2 sm:mt-0">{bookRequestForm(width)}</div>
        </div>
      </div>

      <div>
        <div className="m-4 sm:mt-0">{recentReviews()}</div>
      </div>

      {/* <div>
        <div className="m-4 sm:mt-0">{cheapKindleToast()}</div>
      </div> */}

      {footer()}
    </Div100vh>
  );
};

export default Home;
