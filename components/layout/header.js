import Link from 'next/link'

function Navigation() {
  let links = [
    { href: '/icons', label: 'Icons' },
    { href: '/start', label: 'Start' },
    { href: '/docs', label: 'Docs' },
    { href: '/support', label: 'Support' },
  ]
  return (
    <nav className="flex items-center gap-12">
      {links.map(({ href, label }) => (
        <Link href={href} key={label} >
          <a className="text-base font-medium leading-normal text-blue-100 select-none">{label}</a>
        </Link>
      ))}
    </nav>
  )
}

export default function Header({ location = "default", size }) {
  let position = {
    default: "relative my-6",
    hero: "absolute left-0 right-0 w-full flex justify-center top-6"
  }
  return (
    <header className={`z-10 ${position[location]}`}>
      <div className="inline-flex mx-auto bg-blue-400 py-4 pl-8 pr-10 rounded-full gap-8">
        <Link href="/">
          <a className="w-6 h-6 text-2xl leading-none text-white"><i className="re-brands re-logo"/></a>
        </Link>
        <Navigation/>
      </div>
    </header>
  )
}
