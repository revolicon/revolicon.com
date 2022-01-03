import Image from "next/image";

import Browser from "./browser";
import {useState} from "react";

function Header({ badge, category, title, description, children, style, className }) {
  return (
    <div className={`flex flex-col gap-3 w-full ${className}`} style={style}>
      {badge && <div className="flex items-center">{badge}</div>}
      <div className="text-lg font-medium leading-6 text-blue-500">{category}</div>
      <div className="text-[32px] font-semibold leading-10 text-neutral-500">{title}</div>
      <div className="text-lg leading-6 text-neutral-400">{description || children}</div>
    </div>
  )
}
function Category() {
  let [category, setCategory] = useState("line");
  let list = [
    {
      slug: "line",
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
      {list.map((item, key) => (
        <CategoryItem item={item} key={key} category={category} setCategory={setCategory}/>
      ))}
    </div>
  )
}
function CategoryItem({ item, key, category, setCategory }) {
  return (
    <div
      className={`flex flex-col items-center gap-3 ${item.active ? "cursor-pointer" : "cursor-help"}`}
      key={key}
      onClick={() => item.active && setCategory(item.slug)}
    >
      <div className="px-4">
        <div
          className={[
            "border-4 border-white h-[72px] w-[72px] overflow-hidden rounded-2xl select-none ring-2",
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
          `text-lg font-medium leading-6`,
          (category === item.slug ? "text-blue-500" : "text-neutral-400")
        ].join(" ")}
      >{item.name}</div>
    </div>
  )
}

export default function Styles() {
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
        <Category/>
      </div>
      <div className="pt-12">
        <Browser className="rounded-t-2xl border-b-0" style={{
          width: 456,
          height: 268
        }}/>
      </div>
    </div>
  );
}
