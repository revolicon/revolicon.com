import Image from "next/image";

export function Header({ badge, category, title, description, button, children, style, className }) {
  console.log(button);
  return (
    <div className={`flex flex-col items-start gap-6 w-full ${className}`} style={style}>
      {badge && (
        <div className="border-2 transition-all duration-300 ease-smooth rounded-2xl border-blue-100">
          <div className="border-4 border-white h-[72px] w-[72px] overflow-hidden rounded-2xl select-none">
            <Image
              src={`/images/home/category/${badge}.png`}
              alt={`${category} Icon`}
              width={128}
              height={128}
              quality={100}
              draggable={false}
            />
          </div>
        </div>
      )}
      <div className="flex flex-col items-start gap-3 w-full">
        {category && <div className="text-lg font-medium leading-6 text-blue-500">{category}</div>}
        {title && <div className="text-[32px] font-semibold leading-10 tracking-title text-neutral-500">{title}</div>}
        {(description || children) && <div className="text-lg leading-6 text-neutral-400">{description || children}</div>}
      </div>
      {button && (
        <div className="inline-flex items-center justify-center px-6 py-2 bg-white border-2 rounded-full border-blue-50">
          <i className="re-line re-arrow-right"/>
        </div>
      )}
    </div>
  )
}
