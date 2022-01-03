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
          <a className="w-6 h-6">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.11292 4.13592C7.30745 3.89701 9.54365 3.97397 10.6993 4.3592L11.9038 4.76067C13.9232 5.43382 17.1159 5.36939 19.0923 4.57881L19.7258 4.32543C19.8572 4.27288 20.0001 4.36963 20.0001 4.51112V12.7813C20.0001 13.1084 19.8009 13.4026 19.4972 13.5241L18.3495 13.9831C16.8123 14.598 14.1069 14.6481 12.5362 14.1246L11.3318 13.7231C9.84591 13.2278 7.25651 13.1289 5.72069 13.436L4.23928 13.7323C4.11553 13.7571 4.00006 13.6624 4.00006 13.5362V4.72245C4.00006 4.62711 4.06735 4.54503 4.16084 4.52633L6.11292 4.13592ZM2.00006 4.72245C2.00006 3.67375 2.74027 2.77084 3.76861 2.56517L5.72069 2.17476C6.30889 2.05711 7.90496 1.99904 8.50006 1.99999C9.45878 2.00152 10.415 2.15623 11.3318 2.46183L12.5362 2.86331C14.1069 3.38687 16.8123 3.33675 18.3495 2.72186L18.983 2.46848C20.4281 1.89044 22.0001 2.9547 22.0001 4.51112V12.7813C22.0001 13.9262 21.303 14.9558 20.24 15.381L19.0923 15.8401C17.1159 16.6307 13.9232 16.6951 11.9038 16.022L10.6993 15.6205C9.54365 15.2353 7.30745 15.1583 6.11292 15.3972L4.63152 15.6935C4.41724 15.7363 4.20522 15.7466 4.00006 15.7282V20.9999C4.00006 21.5522 3.55235 21.9999 3.00006 21.9999C2.44778 21.9999 2.00006 21.5522 2.00006 20.9999V4.72245Z" fill="#FAFBFF"/>
            </svg>
          </a>
        </Link>
        <Navigation/>
      </div>
    </header>
  )
}
