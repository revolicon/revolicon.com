import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import useSound from "use-sound";

function AboutHead() {
  let [click, setClick] = useState(0);
  let [play1] = useSound('/sounds/dtm-1.mp3');

  let handleClick = () => setClick(click + 1);
  useEffect(() => {
    if (click === 3) {
      play1();
      setClick(0);
    }
  }, [click, play1]);

  return (
    <>
      <div className="absolute w-20 h-20 bottom-[34px] right-[388px]" onClick={handleClick}/>
    </>
  )
}
function AboutButton({ className, children, href }) {
  return (
    <Link href={href}>
      <a className={`flex items-center py-2.5 px-6 gap-3 rounded-full leading-6 transition-all duration-300 ease-smooth font-medium select-none ${className}`}>{children}</a>
    </Link>
  )
}

export default function About(props) {
  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden">
      <div className="flex flex-col items-center pt-12 pb-18 text-center">
        <div className="text-lg font-medium leading-6 text-blue-700 mb-3">About us</div>
        <div className="max-w-96 text-[32px] font-semibold leading-10 text-gray-900 mb-3">We work for creatives to build easily</div>
        <div className="max-w-160 text-lg leading-6 text-gray-400 mb-6">Consistent in style, flexible to scale. Revolicon is free and open source. If you enjoy these icons, please support us with a donation.</div>
        <div className="flex items-center gap-4">
          <AboutButton href="/" className="bg-blue-700 hover:bg-blue-800 text-white">Buy us a coffee</AboutButton>
          <AboutButton href="/about" className="bg-blue-50 hover:bg-blue-100 text-blue-700 group0">
            <span>About us</span>
            <i className="re-line re-arrow-right text-lg leading-none"/>
          </AboutButton>
        </div>
      </div>
      <div className="relative select-none">
        <AboutHead/>
        <div className="flex pointer-events-none">
          <Image
            src={`/images/home/about/map.png`}
            alt="About Map"
            width={2256}
            height={400}
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}
