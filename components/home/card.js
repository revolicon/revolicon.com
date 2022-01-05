export function Header({ badge, category, title, description, children, style, className }) {
  return (
    <div className={`flex flex-col gap-3 w-full ${className}`} style={style}>
      {badge && <div className="flex items-center">{badge}</div>}
      <div className="text-lg font-medium leading-6 text-blue-500">{category}</div>
      <div className="text-[32px] font-semibold leading-10 tracking-title text-neutral-500">{title}</div>
      <div className="text-lg leading-6 text-neutral-400">{description || children}</div>
    </div>
  )
}
