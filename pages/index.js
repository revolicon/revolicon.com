import Head from "next/head";

import Search from "../components/home/search";
import Hero from "../components/home/hero";
import Styles from "../components/home/styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Revolicon</title>
      </Head>
      <Hero/>
      <div className="container space-y-6 -mt-36 relative z-10">
        <Search/>
        <Styles/>
        <div className="flex h-32"/>
      </div>
    </>
  )
}
