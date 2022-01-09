import Link from "next/link";

function FooterContent() {
  return (
    <div className="flex flex-col gap-6 mb-12">
      <div className="w-12 h-12">
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.2257 12.2719L10.3216 13.0527C10.1346 13.0901 10 13.2543 10 13.4449V29.0724C10 29.3249 10.2309 29.5142 10.4784 29.4647L13.4412 28.8721C16.5129 28.2578 19.6917 28.4557 22.6634 29.4463L25.0723 30.2492C28.2137 31.2963 31.6245 31.1961 34.699 29.9663L36.9942 29.0482C37.6017 28.8052 38 28.2169 38 27.5626V13.0223C38 12.7393 37.7142 12.5458 37.4514 12.6509L36.1845 13.1577C32.2316 14.7388 27.8463 14.8677 23.8074 13.5214L21.3985 12.7184C19.0872 11.948 16.6148 11.7941 14.2257 12.2719ZM6 13.4449C6 11.3475 7.48042 9.54172 9.53709 9.13038L13.4412 8.34955C14.6177 8.11427 15.8098 7.99812 17 8.00002C18.9174 8.00308 20.8299 8.31251 22.6634 8.9237L25.0723 9.72665C28.2137 10.7738 31.6245 10.6735 34.6989 9.44376L35.9659 8.93699C38.8561 7.78091 42 9.90944 42 13.0223V27.5626C42 29.8525 40.6059 31.9117 38.4798 32.7621L36.1845 33.6802C32.2316 35.2614 27.8463 35.3902 23.8074 34.0439L21.3985 33.241C19.0872 32.4705 16.6148 32.3166 14.2257 32.7944L11.2629 33.387C10.8344 33.4727 10.4103 33.4933 10 33.4564V41.9999C10 43.1045 9.10457 43.9999 8 43.9999C6.89543 43.9999 6 43.1045 6 41.9999V13.4449Z" fill="#181C1F"/>
        </svg>
      </div>
      <div className="text-[2rem] leading-10 font-semibold tracking-[-1px]">
        <div className="text-blue-500">Revolutionary</div>
        <div className="text-neutral-500">Open Source</div>
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
      <a target="_blank" className="h-10 w-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center text-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 ease-smooth">
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
      <a className="text-lg leading-6 text-neutral-500 hover:underline">{children}</a>
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
      <footer className="flex bg-white rounded-3xl py-[72px]">
        <div className="w-[480px] flex-none px-[72px]">
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
