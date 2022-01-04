import Head from "next/head";

import Search from "../components/home/search";
import Hero from "../components/home/hero";
import Styles from "../components/home/styles";
import Marquee from "react-fast-marquee";

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
        <div className="bg-white p-4">
          <Marquee
            gradientColor={false}
            pauseOnHover={true}
            pauseOnClick={true}
          >
            <div className="flex gap-4 ml-4">
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
              <div>XXX</div>
            </div>
          </Marquee>
        </div>
        <div className="flex h-32"/>
      </div>
    </>
  )
}
