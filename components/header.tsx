import Head from "next/head";
import Link from "next/link";
import styles from "../styles/header.module.css";
export default function header() {
  return (
    <div className="pb-4">
      <Head>
        <title>bookshelf</title>
        <style>{"body { background-color: #E9E7E7; }"}</style>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a>
          <div className="relative z-10 rounded-b-lg bg-white drop-shadow-xl">
            <div className="flex justify-start py-4 px-4 tracking-tight sm:py-6 sm:px-6">
              <span className="text-2xl">the&nbsp;</span>
              <span className="text-2xl font-bold text-primary-400">
                osborne
              </span>
              <span className="text-2xl">&nbsp;bookshelf</span>
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.bookbg}></div>
    </div>
  );
}
