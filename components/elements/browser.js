export default function Browser({ className, children, style }) {
  return (
    <div className={`flex flex-col border bg-white/[.48] border-neutral-1 overflow-hidden backdrop-blur-xl ${className}`} style={style}>
      <div className="flex-none p-3 flex items-center w-full border-b border-neutral-1 gap-1.5">
        {[1,2,3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-neutral-200"/>)}
      </div>
      <div className="flex-1 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  )
}

export function BrowserLine() {
  return <div className="h-0.5 w-full flex" style={{ background: "linear-gradient(90deg, rgba(247, 249, 251, 0.24) 0%, #F7F9FB 50.52%, rgba(247, 249, 251, 0.24) 100%)" }}/>;
}
