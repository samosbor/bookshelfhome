import type { NextPage } from "next";
import audioAccountForm from "../components/audioAccountForm";
import header from "../components/header";
import SetupMarkdown from "../components/setup.mdx";

const AudioSetup: NextPage = (props) => {
  return (
    <div>
      {header()}
      <div className="relative w-full justify-center overflow-hidden break-words p-2 py-8 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:py-12">
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

        <div className="mx-2 pt-2 md:mx-auto">{audioAccountForm()}</div>
      </div>
    </div>
  );
};

export default AudioSetup;
