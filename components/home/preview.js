import {Animated} from "react-animated-css";
import {useEffect, useState} from "react";

function PreviewIcon({ type, icon, delay }) {
  return (
    <Animated animationIn="iconIn" animationInDuration={600} animationInDelay={delay * 44} isVisible={true}>
      <div className="w-8 h-8 flex justify-center items-center">
        <i className={`re-${type} re-${icon}`}/>
      </div>
    </Animated>
  )
}
function PreviewLine() {
  return <div className="h-0.5 w-full flex" style={{ background: "linear-gradient(90deg, rgba(247, 249, 251, 0.24) 0%, #F7F9FB 50.52%, rgba(247, 249, 251, 0.24) 100%)" }}/>;
}

export default function Preview({ list, type, icon }) {
  const [isComponentMounted, setIsComponentMounted] = useState(false)

  useEffect(() => setIsComponentMounted(true), [])
  if(!isComponentMounted) return null;

  return (
    <div className="my-auto flex flex-col gap-6" data-style={type}>
      {list.map((item, index) => (
        <div key={index}>
          <PreviewLine/>
          <div className="flex gap-16 justify-center py-2 text-[32px]" key={index}>
            {item.map((slug, key) => {
              let IconComponent = icon || PreviewIcon;
              return <IconComponent delay={(key+1)*(index+1)} key={key} type={type} icon={slug} />
            })}
          </div>
          <PreviewLine/>
        </div>
      ))}
    </div>
  )
}
