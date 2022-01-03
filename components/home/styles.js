import {useState} from "react";
import {Animated} from "react-animated-css";

import Image from "next/image";

import Browser from "./browser";

function Header({ badge, category, title, description, children, style, className }) {
  return (
    <div className={`flex flex-col gap-3 w-full ${className}`} style={style}>
      {badge && <div className="flex items-center">{badge}</div>}
      <div className="text-lg font-medium leading-6 text-blue-500">{category}</div>
      <div className="text-[32px] font-semibold leading-10 tracking-title text-neutral-500">{title}</div>
      <div className="text-lg leading-6 text-neutral-400">{description || children}</div>
    </div>
  )
}

function Category({ category, setCategory }) {
  let list = [
    {
      slug: "regular",
      name: "Line",
      active: true
    },
    {
      slug: "solid",
      name: "Solid",
      active: true
    },
    {
      slug: "duotone",
      name: "Duotone",
      active: false
    },
    {
      slug: "thin",
      name: "Thin",
      active: false
    }
  ]
  return (
    <div className="flex gap-4">
      {list.map((item) => (
        <CategoryItem item={item} key={item.slug} category={category} setCategory={setCategory}/>
      ))}
    </div>
  )
}
function CategoryItem({ item, category, setCategory }) {
  return (
    <div
      className={`flex flex-col items-center gap-3 relative ${item.active ? "cursor-pointer" : "cursor-help"}`}
      onClick={() => item.active && setCategory(item.slug)}
    >
      <div className={`absolute z-10 px-3 py-1.5 bg-blue-100 rounded-full ring-2 ring-inset ring-blue-500 -top-2 -right-1.5 ${item.active ? "hidden" : "inline-flex"}`}>
        <div className="text-sm font-medium leading-4 text-center text-blue-500">Soon</div>
      </div>
      <div className="px-4">
        <div
          className={[
            "border-4 border-white h-[72px] w-[72px] overflow-hidden rounded-2xl select-none ring-2 transition-all duration-300 ease-smooth",
            item.active ? (category === item.slug ? "ring-blue-500" : "ring-[#E0E7FF]") : "ring-blue-100",
          ].join(" ")}
        >
          <Image
            src={`/images/home/styles/${item.slug}.png`}
            alt={`${item.name} Icon`}
            width={64}
            height={64}
            draggable={false}
          />
        </div>
      </div>
      <div
        className={[
          `text-lg font-medium leading-6 transition-all duration-300 ease-smooth`,
          (category === item.slug ? "text-blue-500" : "text-neutral-400")
        ].join(" ")}
      >{item.name}</div>
    </div>
  )
}

function Preview({ type }) {
  let list = [
    ["piano", "guitar", "headphones", "dial-5"],
    ["clapperboard", "film", "film-canister", "video"]
  ]
  return (
    <div className="my-auto flex flex-col gap-6">
      {list.map((item, index) => (
        <div key={index}>
          <PreviewLine/>
          <div className="flex gap-16 justify-center py-2" key={index}>
            {item.map((slug, key, i) => <PreviewItem delay={(key+1)*(index+1)} key={i} type={type} icon={slug} />)}
          </div>
          <PreviewLine/>
        </div>
      ))}
    </div>
  )
}
function PreviewLine() {
  return <div className="h-0.5 w-full flex" style={{ background: "linear-gradient(90deg, rgba(247, 249, 251, 0.24) 0%, #F7F9FB 50.52%, rgba(247, 249, 251, 0.24) 100%)" }}/>;
}
function PreviewItem({ type, icon, delay }) {
  return (
    <Animated animationIn="iconIn" animationInDuration={600} animationInDelay={delay * 44} isVisible={true}>
      <div className="w-8 h-8 flex justify-center items-center text-[32px]">
        <i className={`re-${type} re-${icon}`}/>
      </div>
    </Animated>
  )
}

export default function Styles() {
  let categories = ["regular", "solid"]
  let [category, setCategory] = useState("regular");

  return (
    <div className="flex justify-between items-end px-12 bg-white rounded-3xl">
      <div className="py-12 h-full">
        <Header
          style={{ maxWidth: 448 }}
          className="mb-12"
          category="Styles"
          title="Blends right in"
          description="Revolicon is available in two styles, regular and solid - with even more coming in Version 2."
        />
        <Category category={category} setCategory={setCategory}/>
      </div>
      <div className="pt-12">
        <Browser className="rounded-t-2xl border-b-0" style={{
          width: 456,
          height: 268
        }}>
          {categories.map(item => item === category ? <Preview type={item} key={item}/> : null)}
        </Browser>
      </div>
    </div>
  );
}
