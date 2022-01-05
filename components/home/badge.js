export default function Badge({ show, children }) {
  return (
    <div
      className={[
        `absolute z-10 px-3 py-1.5 bg-blue-100 rounded-full ring-2 ring-inset ring-blue-500 -top-2 -right-1.5`,
        (show ? "inline-flex" : "hidden")
      ].join(' ')}
    >
      <div className="text-sm font-medium leading-4 text-center text-blue-500">{children}</div>
    </div>
  )
}
