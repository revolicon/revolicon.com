import Link from "next/link";

import Icons from "/public/icons.json";

function Input() {
  return (
    <label className="w-full h-16 flex items-center space-x-4 border-2 border-neutral-100 rounded-full overflow-hidden bg-neutral-50 px-6 focus-within:border-neutral-200 transition-all duration-300">
      <div className="w-6 h-6 flex flex-none"><i className="re-brands re-search text-2xl leading-none"/></div>
      <input className="w-full h-full focus:outline-none outline-none font-medium text-neutral-900 placeholder:text-neutral-400 text-lg flex-1 select-none" type="text" placeholder="Search 8,023 icons across all categories"/>
    </label>
  )
}
function Suggestions() {
  return (
    <div className="w-full text-lg font-medium leading-normal text-center">
      Try <SuggestionsItem icon="mic"/>, <SuggestionsItem icon="video"/>, <SuggestionsItem icon="fingerprint"/>, <SuggestionsItem icon="guitar"/>, or <SuggestionsItem icon="shield"/>.
    </div>
  )
}
function SuggestionsItem({ icon }) {
  return (
    <Link href={{
      pathname: "/icons",
      query: { q: icon, s: Icons.style[0].slug }
    }}>
      <a className="text-blue-700 cursor-pointer">{icon}</a>
    </Link>
  )
}

function List() {
  let list = [
    { type: "hidden" },
    { type: "empty" },
    { type: "icon", icon: "bug" },
    { type: "icon", icon: "lock" },
    { type: "empty" },
    { type: "hidden" },
    { type: "icon", icon: "drone" },
    { type: "empty" },
    { type: "icon", icon: "tv" },
    { type: "empty" },

    { type: "icon", icon: "airplay-audio" },
    { type: "icon", icon: "fingerprint" },
    { type: "empty" },
    { type: "icon", icon: "shield" },
    { type: "empty" },
    { type: "icon", icon: "ticket" },
    { type: "icon", icon: "camera-polaroid" },
    { type: "hidden" },
    { type: "icon", icon: "guitar-electric" },
    { type: "empty" },

    { type: "empty" },
    { type: "icon", icon: "video" },
    { type: "icon", icon: "key" },
    { type: "empty" },
    { type: "empty" },
    { type: "empty" },
    { type: "icon", icon: "mic-2" },
    { type: "empty" },
    { type: "empty" },
    { type: "empty" }
  ]
  return (
    <div className="grid grid-cols-10 gap-6">
      {list.map((item, index) => (
        <div key={index}>
          <ListItem type={item.type} icon={item.icon}/>
        </div>
      ))}
    </div>
  )
}
function ListItem({ type, icon }) {
  let style = {
    hidden: "opacity-0",
    empty: "bg-neutral-100",
    icon: "shadow-[0px_16px_16px_#F7F9FB] bg-white"
  }
  return (
    <div className={`w-full pt-[100%] relative rounded-2xl text-[36px] ${style[type]}`}>
      {type === "icon" && <i className={`re-line re-${icon} absolute top-0 left-0 flex items-center justify-center w-full h-full`}/>}
    </div>
  )
}

export default function Search() {
  return (
    <div className="flex flex-col items-center gap-24 px-24 pt-8 bg-white rounded-3xl overflow-hidden">
      <div className="flex flex-col space-y-4 items-center justify-center w-full max-w-160">
        <Input/>
        <Suggestions/>
      </div>
      <div className="-mb-6 w-full">
        <List/>
      </div>
    </div>
  )
}
