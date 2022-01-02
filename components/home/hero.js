import Image from 'next/image'

function Text() {
  return (
    <div className="flex text-neutral-50 flex flex-col justify-center items-center gap-4">
      <Image
        src="/images/logo-white.svg"
        alt="Hero Logo"
        layout="fixed"
        width={142}
        height={32}
        quality={100}
      />
      <div className="text-[40px] leading-[48px] tracking-title font-semibold text-center flex flex-col justify-center items-center">
        <div>Beautifully <span className="text-blue-300 font-normal">✦</span> Crafted</div>
        <div>Open Source Icons</div>
      </div>
    </div>
  )
}
function Actions() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div>
        <div className="h-12 w-12 bg-red">e</div>
      </div>
      <div className="flex items-center justify-center gap-2 text-blue-300">
        <ActionsLink>Version 1.0</ActionsLink>
        <ActionsDot/>
        <ActionsLink>8,023 Icons</ActionsLink>
        <ActionsDot/>
        <ActionsLink>48 Categories</ActionsLink>
        <ActionsDot/>
        <ActionsLink>Download</ActionsLink>
      </div>
    </div>
  )
}
function ActionsLink({ href, children }) {
  return <a href={href || null} className="underline underline-offset-1 text-blue-300 hover:text-blue-50 transition-colors cursor-pointer">{children}</a>
}
function ActionsDot() {
  return <span className="w-6 text-center">·</span>
}

export default function Hero() {
  return (
    <div className="bg-blue-500 overflow-hidden relative pb-54 pt-38">
      <div className="absolute top-0 right-0 z-0">
        <Image
          src="/images/home/hero.png"
          alt="Hero Image"
          layout="fixed"
          width={840}
          height={800}
          quality={100}
        />
      </div>
      <div className="container relative z-10 flex flex-col gap-8">
        <Text/>
        <Actions/>
      </div>
    </div>
  )
}
