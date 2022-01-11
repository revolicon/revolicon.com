import Link from "next/link";
import Marquee from "react-fast-marquee";

import Icons from "/public/icons.json";

import { Header, Body } from "../elements/card";
import Browser, { BrowserLine } from "../elements/browser";

function BrowserPreview() {
  return (
    <div className="h-full flex flex-col justify-center gap-6">
      {["left", "right"].map((direction, key) => (
        <div key={key}>
          <BrowserLine/>
          <Marquee
            key={key}
            direction={direction}
            gradient={false}
            pauseOnHover={true}
            pauseOnClick={true}
          >
            <div className="flex gap-5 ml-5">
              {Icons.category.sort(() => .5 - Math.random()).map((item, key) => <BrowserPreviewItem item={item} key={key}/>)}
            </div>
          </Marquee>
          <BrowserLine/>
        </div>
      ))}
    </div>
  )
}
function BrowserPreviewItem({ item }) {
  return (
    <div className="py-0.5 px-1">
      <Link href={{
        pathname: '/icons',
        query: { c: item.slug },
      }}>
        <a className="inline-flex gap-3 items-center justify-center px-5 py-2.5 text-neutral-500 rounded-full transition-all duration-300 ease-smooth hover:bg-blue-50 hover:text-blue-500">
          <i className={`text-2xl leading-6 re-line re-${item.icon}`}/>
          <p className="text-base font-medium select-none">{item.name}</p>
        </a>
      </Link>
    </div>
  )
}

export default function Categories() {
  return (
    <Body className="justify-between items-end">
      <div className="py-12 h-full">
        <Header
          badge="categories"
          style={{ maxWidth: 448 }}
          category="Categories"
          title="Everything you need"
          description="Revolicon consists of 48 categories with 8,023 icons with even more coming in upcoming versions."
          button={{
            href: "/categories"
          }}
        />
      </div>
      <div className="pt-12 relative z-10">
        <Browser className="rounded-t-2xl border-b-0" style={{
          width: 456,
          height: 268
        }}>
          <BrowserPreview/>
        </Browser>
      </div>
    </Body>
  )
}
