import { Header, Body } from "../elements/card";
import Link from "next/link";
import Badge from "../elements/badge";

function TechnologyList() {
  let technologyList = [
    {
      icon: "letter-aa",
      title: "Web fonts, CSS",
      href: "/docs",
      active: true
    },
    {
      icon: "figma",
      title: "Figma",
      href: "/docs",
      active: true
    },
    {
      icon: "draw-square",
      title: "SVG, JS",
      href: "/docs",
      active: false
    },
    {
      icon: "vuejs",
      title: "Vue.js",
      href: "/docs",
      active: false
    },
    {
      icon: "react",
      title: "React",
      href: "/docs",
      active: false
    },
    {
      icon: "svelte",
      title: "Svelte",
      href: "/docs",
      active: false
    },
    {
      icon: "angular",
      title: "Angular",
      href: "/docs",
      active: false
    }
  ]
  return (
    <div className="flex justify-between gap-4">
      {technologyList.map((item, key) => (
        <div className="flex-1 flex justify-center" key={key}>
          <Link href={item.href}>
            <a className={item.active ? "cursor-pointer" : "cursor-help"}><TechnologyListItem item={item}/></a>
          </Link>
        </div>
      ))}
    </div>
  )
}
function TechnologyListItem({ item }) {
  return (
    <div className="group flex flex-col justify-center items-center text-center">
      <div className="w-18 h-18 relative">
        <Badge show={!item.active} className="-top-2 -right-6">Soon</Badge>
        <div
          className={[
            "flex justify-center items-center w-full h-full border-2 border-blue-100 rounded-2xl text-[32px] leading-none transition-all duration-300 ease-smooth",
            item.active ? "group-hover:border-blue-500" : ""
          ].join(" ")}
        >
          <i className={[
            `re-brands re-${item.icon}`,
            item.active ? "text-blue-500" : "text-blue-200"
          ].join(" ")}/>
        </div>
      </div>
      <span className="text-center mt-3 text-lg leading-6 font-medium">{item.title}</span>
    </div>
  )
}

export default function Technology(props) {
  return (
    <Body className="py-12 gap-12 flex-col">
      <Header
        badge="start"
        style={{ maxWidth: 512 }}
        category="Getting Started"
        title="Use it everywhere"
        description="Don't worry about supported platforms. Our icons work in everyone's favorite tools and languages."
      />
      <TechnologyList/>
    </Body>
  )
}
