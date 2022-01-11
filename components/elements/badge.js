export default function Badge({ show, children, className }) {
  return (
    <div
      className={[
        `absolute z-10 px-3 py-1.5 bg-blue-100 rounded-full ring-2 ring-inset ring-blue-700 select-none`,
        (show ? "inline-flex" : "hidden"),
        className
      ].join(' ')}
    >
      <div className="text-sm font-medium leading-4 text-center text-blue-700">{children}</div>
    </div>
  )
}
