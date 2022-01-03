function Input() {
  return (
    <label className="w-full h-16 flex items-center space-x-4 border-2 border-neutral-100 rounded-full overflow-hidden bg-neutral-50 px-6 focus-within:border-neutral-200 transition-all duration-300">
      <svg className="w-6 h-6 flex-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16.6177 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.078 18.0319 16.6177L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16.6177 18.0319ZM18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z" fill="#181C1F"/>
      </svg>
      <input className="w-full h-full focus:outline-none outline-none font-medium text-neutral-500 placeholder:text-neutral-400 text-lg flex-1 select-none" type="text" placeholder="Search 8,023 icons across all categories"/>
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
  return <span className="text-blue-500 cursor-pointer">{icon}</span>
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
      {list.map((item, index) => {
        return (
          <div key={index}>
            <ListItem type={item.type} icon={item.icon}/>
          </div>
        )
      })}
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
      {type === "icon" && <i className={`re-regular re-${icon} absolute top-0 left-0 flex items-center justify-center w-full h-full`}/>}
    </div>
  )
}

export default function Search() {
  return (
    <div className="flex flex-col items-center gap-24 px-24 pt-8 bg-white rounded-3xl overflow-hidden">
      <div className="flex flex-col space-y-4 items-center justify-center w-full max-w-[640px]">
        <Input/>
        <Suggestions/>
      </div>
      <div className="-mb-6 w-full">
        <List/>
      </div>
    </div>
  )
}
