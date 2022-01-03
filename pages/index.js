import Head from "next/head";

import Search from "../components/home/search";
import Hero from "../components/home/hero";
import Browser from "../components/home/browser";

export default function Home() {
  return (
    <>
      <Head>
        <title>Revolicon</title>
      </Head>
      <Hero/>
      <div className="container space-y-6 -mt-36 relative z-10">
        <Search/>
        <Browser className="rounded-t-2xl border-b-0" style={{
          width: 456,
          height: 232
        }}/>
      </div>
    </>
  )
}
