import React from "react";

import Image from 'next/image'
import Link from "next/link";

import Icons from "/public/icons.json";
import Styles from '/styles/home/Heros.module.scss'

function Text() {
  return (
    <div className="flex text-neutral-50 flex flex-col justify-center items-center gap-4">
      <div className="select-none">
        <Image
          src="/images/logo-white.svg"
          alt="Hero Logo"
          layout="fixed"
          width={142}
          height={32}
          quality={100}
        />
      </div>
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
      <div className="flex items-center gap-4">
        <Link href="/icons" passHref>
          <ActionsButton className="bg-neutral-500" icon="face-id-success">Browse Icons</ActionsButton>
        </Link>
        <Link href="/start" passHref>
          <ActionsButton className="bg-blue-400" icon="shield-tick">Get Started - <span className="font-normal">it’s free</span></ActionsButton>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2 text-blue-300">
        <ActionsLink>Version {Icons.version}</ActionsLink>
        <ActionsDot/>
        <ActionsLink>8,023 Icons</ActionsLink>
        <ActionsDot/>
        <ActionsLink>{Icons.category.length} Categories</ActionsLink>
        <ActionsDot/>
        <ActionsLink>Download</ActionsLink>
      </div>
    </div>
  )
}
function ActionsLink({ href, children }) {
  return <a href={href || null} className="underline underline-offset-1 font-medium text-blue-300 hover:text-blue-50 transition-colors cursor-pointer">{children}</a>
}
function ActionsDot() {
  return <span className="w-6 text-center select-none">·</span>
}
const ActionsButton = React.forwardRef(({ href, children, className, icon }, ref) => {
  return (
    <a href={href || null} ref={ref} className={`flex items-center justify-center gap-3 text-neutral-50 py-3 px-6 rounded-full font-semibold select-none ${className}`}>
      <div className="w-6 h-6 flex items-center text-2xl">
        <i className={`re-regular re-${icon}`}/>
      </div>
      <span>{children}</span>
    </a>
  )
})
      ActionsButton.displayName = "ActionsButton"

export default function Hero() {
  return (
    <div className="bg-blue-500 overflow-hidden relative pb-54 pt-38">
      <div className={Styles.hero__image}>
        <Image
          src="/images/home/hero.png"
          alt="Hero Image"
          layout="fixed"
          loading="eager"
          width={840}
          height={800}
          quality={100}
          draggable={false}
          priority={true}
        />
      </div>
      <div className="container relative z-10 flex flex-col gap-8">
        <Text/>
        <Actions/>
      </div>
    </div>
  )
}
