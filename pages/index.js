import Head from "next/head";

import Search from "../components/home/search";
import Hero from "../components/home/hero";
import Styles from "../components/home/styles";
import Categories from "../components/home/categories";
import Brands from "../components/home/brands";
import Animations from "../components/home/animations";
import Features from "../components/home/features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Revolicon</title>
      </Head>
      <Hero/>
      <div className="container space-y-6 -mt-36 relative z-10 mb-6">
        <Search/>
        <Styles/>
        <div className="flex gap-6">
          <div className="w-1/2"><Brands/></div>
          <div className="w-1/2"><Animations/></div>
        </div>
        <Categories/>
        <Features/>
      </div>
    </>
  )
}
