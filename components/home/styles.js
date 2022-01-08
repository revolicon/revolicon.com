import {useState} from "react";
import {Animated} from "react-animated-css";

import Image from "next/image";
import Link from "next/link";

import Icons from "/public/icons.json";

import { Header } from "./card";
import Browser from "./browser";
import Badge from "./badge";
import Preview from "./preview";

function Style({ category, setCategory }) {
  return (
    <div className="flex gap-4">
      {Icons.style.map((item) => (
        <StyleItem item={item} key={item.slug} category={category} setCategory={setCategory}/>
      ))}
    </div>
  )
}
function StyleItem({ item, category, setCategory }) {
  return (
    <div
      className={`flex flex-col items-center gap-3 relative ${item.active ? "cursor-pointer" : "cursor-help"}`}
      onClick={() => item.active && setCategory(item.slug)}
    >
      <Badge show={!item.active} className="-top-1.5 -right-1">Soon</Badge>
      <div className="px-4">
        <div
          className={[
            "border-2 transition-all duration-300 ease-smooth rounded-2xl",
            item.active ? (category === item.slug ? "border-blue-500" : "border-[#E0E7FF]") : "border-blue-100"
          ].join(" ")}
        >
          <div className="border-4 border-white h-[72px] w-[72px] overflow-hidden rounded-2xl select-none">
            <Image
              src={`/images/home/styles/${item.slug}.png`}
              alt={`${item.name} Icon`}
              width={128}
              height={128}
              quality={100}
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div
        className={[
          `text-lg font-medium leading-6 transition-all duration-300 ease-smooth select-none`,
          (category === item.slug ? "text-blue-500" : "text-neutral-400")
        ].join(" ")}
      >{item.name}</div>
    </div>
  )
}

function BrowserPreview({ category, icon }) {
  let list = [
    ["piano", "guitar", "headphones", "dial-5"],
    ["clapperboard", "film", "film-canister", "video"]
  ]

  return Icons.style.map((item, key) =>
    item.active &&
    item.slug === category &&
    <Preview type={item.slug} key={key} list={list} icon={icon}/>
  )
}
function BrowserPreviewIcon({ type, icon, delay }) {
  return (
    <Link href={`/icons/${icon}?s=${type}`}>
      <a>
        <Animated animationIn="iconIn" animationInDuration={600} animationInDelay={delay * 44} isVisible={true} className="flex justify-center items-center w-8 h-8">
          <i className={`re-${type} re-${icon}`}/>
        </Animated>
      </a>
    </Link>
  )
}

export default function Styles() {
  let [category, setCategory] = useState("line");

  return (
    <div className="flex justify-between items-end px-12 bg-white rounded-3xl relative">
      <div className="py-12 h-full">
        <Header
          style={{ maxWidth: 448 }}
          className="mb-12"
          category="Styles"
          title="Blends right in"
          description="Revolicon is available in two styles, line and solid - with even more coming in Version 2."
        />
        <Style category={category} setCategory={setCategory}/>
      </div>
      <div className="pt-12 relative z-10">
        <Browser className="rounded-t-2xl border-b-0" style={{
          width: 456,
          height: 268
        }}>
          <BrowserPreview category={category} icon={BrowserPreviewIcon}/>
        </Browser>
      </div>
      <div className="absolute right-0 bottom-0 select-none flex">
        <Image
          src="/images/home/styles/effect.png"
          alt="Hero Logo"
          width={450}
          height={392}
          quality={100}
        />
      </div>
    </div>
  );
}
