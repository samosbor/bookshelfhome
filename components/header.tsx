import Head from "next/head";
import Link from "next/link";
export default function header() {
  return (
    <div className="pb-4">
      <Head>
        <title>bookshelf</title>
        <style>{"body { background-color: white; }"}</style>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a>
          <div className="relative bg-base-100 drop-shadow-xl">
            <div className="flex justify-start py-6 px-4 sm:px-6">
              <span className="text-2xl">the&nbsp;</span>
              <span className="text-2xl font-bold text-primary-400">osborne</span>
              <span className="text-2xl">&nbsp;bookshelf</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
