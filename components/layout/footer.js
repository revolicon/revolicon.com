import Link from "next/link";

function FooterContent() {
  return (
    <div className="flex flex-col gap-6 mb-12">
      <div className="w-12 h-12 flex">
        <i className="re-brands re-logo text-[48px]"/>
      </div>
      <div className="text-[32px] leading-10 font-semibold tracking-[-1px]">
        <div className="text-blue-700">Revolutionary.</div>
        <div className="text-neutral-900">Open Source.</div>
      </div>
      <div className="text-lg leading-6 text-neutral-400">
        “Do you want to sell sugar water for the rest of your life, or do you want to come with me and change the world?”
      </div>
    </div>
  )
}

function FooterSocial({ data }) {
  return (
    <div className="flex gap-4">
      {data.map((item, key) => <FooterSocialItem key={key} {...item}/>)}
    </div>
  )
}
function FooterSocialItem({ icon, href }) {
  return (
    <Link href={href || "#"}>
      <a target="_blank" className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl hover:bg-blue-700 hover:text-white transition-all duration-300 ease-smooth">
        <i className={`re-brands re-${icon}`}/>
      </a>
    </Link>
  )
}

function FooterList({ data }) {
  return (
    <div className="flex flex-col px-6 flex-1">
      <div className="text-lg leading-6 text-neutral-400 mb-6">{data.title}</div>
      <ul className="flex flex-col items-start gap-6">
        {data.list.map((item, key) => (
          <FooterListLink key={key} href={item.link}>{item.text}</FooterListLink>
        ))}
      </ul>
    </div>
  )
}
function FooterListLink({ href, children }) {
  return (
    <Link href={href || "#"}>
      <a className="text-lg leading-6 text-neutral-900 hover:underline">{children}</a>
    </Link>
  )
}

export default function Footer() {
  let footerLinks = [
    {
      title: "Product",
      list: [
        { link: "/", text: "About us" },
        { link: "/", text: "Changelog" },
        { link: "/", text: "License" },
        { link: "/", text: "Terms" },
        { link: "/", text: "Privacy" }
      ]
    },
    {
      title: "Support",
      list: [
        { link: "/", text: "Contact us" },
        { link: "/", text: "Troubleshooting" },
        { link: "/", text: "Report a bug" },
        { link: "/", text: "Common questions" }
      ]
    },
    {
      title: "Icons",
      list: [
        { link: "/", text: "Icon library" },
        { link: "/", text: "Request an icon" }
      ]
    }
  ]
  let footerSocial = [
    { icon: "twitter", href: "https://twitter.com/revolicon" },
    { icon: "github", href: "https://github.com/revolicon" },
    { icon: "dribbble", href: "https://dribbble.com/revolicon" },
    { icon: "instagram", href: "#" }
  ]

  return (
    <div className="container mb-6">
      <footer className="flex bg-white rounded-3xl py-18">
        <div className="w-[480px] flex-none px-18">
          <FooterContent/>
          <FooterSocial data={footerSocial}/>
        </div>
        <div className="w-full flex-1 flex">
          {footerLinks.map((list, index) => (
            <FooterList key={index} data={list} />
          ))}
        </div>
      </footer>
    </div>
  )
}
