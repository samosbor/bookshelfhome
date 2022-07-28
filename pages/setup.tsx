import type { NextPage } from "next";
import header from "../components/header";
import SetupMarkdown from "../components/setup.mdx";

const Setup: NextPage = (props) => {
  return (
    <div>
      {header()}
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden break-words bg-gray-50 py-8 lg:py-12">
        <article>
          <div className="relative w-full p-2 md:mx-auto md:max-w-3xl lg:max-w-4xl">
            <a href="/">
              <div className="flex text-primary-500">
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
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                <span>Back to home</span>
              </div>
            </a>
          </div>
          <div className="relative w-full rounded-xl bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
            <div className="prose prose-sm mx-auto md:prose-base">
              <SetupMarkdown />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Setup;
