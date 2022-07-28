import Head from "next/head";
import Link from "next/link";
export default function header() {

  const myStyle: React.CSSProperties = {
    backgroundImage: `url("books2.png")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    mixBlendMode: 'overlay',
    maskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))"
  }

  return (
    <div className="pb-4">
      <Head>
        <title>bookshelf</title>
        <style>
          {
            'body { background-color: #E9E7E7; }'
          }
        </style>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a>
          <div className="z-10 relative rounded-b-lg bg-white drop-shadow-xl">
            <div className="flex justify-start py-4 px-4 sm:py-6 sm:px-6">
              <span className="text-2xl">the&nbsp;</span>
              <span className="text-2xl font-bold text-primary-400">
                osborne
              </span>
              <span className="text-2xl">&nbsp;bookshelf</span>
            </div>
          </div>
        </a>
      </Link>
      <div className="absolute top-0 h-96 w-full bg-gradient-to-r" style={myStyle}>

      </div>
    </div>
  );
}
