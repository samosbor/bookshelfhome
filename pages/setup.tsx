import type { NextPage } from "next";
import header from "../components/header";
import SetupMarkdown from "../components/setup.mdx";

const Setup: NextPage = (props) => {
  return (
    <div>
      {header()}
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden break-words bg-gray-50 py-8 lg:py-12">
        <article>
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
