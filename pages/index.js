import Head from "next/head";

import Search from "../components/home/search";
import Hero from "../components/home/hero";
import Styles from "../components/home/styles";
import Categories from "../components/home/categories";
import Brands from "../components/home/brands";
import Animations from "../components/home/animations";
import Features from "../components/home/features";
import Technology from "../components/home/technology";
import Start from "../components/home/start";
import About from "../components/home/about";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="container space-y-6 -mt-36 relative z-10 mb-6">
        <Search/>
        <Styles/>
        <div className="flex gap-6">
          <div className="w-1/2"><Brands/></div>
          <div className="w-1/2"><Animations/></div>
        </div>
        <Categories/>
        <Technology/>
        <Features/>
        <Start/>
        <About/>
      </div>
    </>
  )
}
