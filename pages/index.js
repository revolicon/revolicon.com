import Head from "next/head";

import Search from "../components/home/search";

export default function Home() {
  return (
    <>
      <Head>
        <title>Revolicon</title>
      </Head>
      <div className="container px-3 sm:px-8 space-y-6">
        <Search/>
      </div>
    </>
  )
}
