import Head from "next/head";

import Search from "../components/home/search";
import Hero from "../components/home/hero";
import Styles from "../components/home/styles";
import Categories from "../components/home/categories";

export default function Home() {
  return (
    <>
      <Head>
        <title>Revolicon</title>
      </Head>
      <Hero/>
      <div className="container space-y-6 -mt-36 relative z-10 mb-32">
        <Search/>
        <Styles/>
        <Categories/>
      </div>
    </>
  )
}
