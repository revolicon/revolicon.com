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
        <Link href="/icons">
          <a><ActionsButton className="bg-neutral-500" icon="face-id-success">Browse Icons</ActionsButton></a>
        </Link>
        <Link href="/start">
          <a><ActionsButton className="bg-blue-400" icon="shield-tick">Get Started - <span className="font-normal">it’s free</span></ActionsButton></a>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2 text-blue-300">
        <Link href="/docs/changelog">
          <a><ActionsLink>Version {Icons.version}</ActionsLink></a>
        </Link>
        <ActionsDot/>
        <Link href="/icons">
          <a><ActionsLink>8,023 Icons</ActionsLink></a>
        </Link>
        <ActionsDot/>
        <Link href={{ pathname: "/icons", query: { s: "solid,brands" } }}>
          <a><ActionsLink>{Icons.category.length} Categories</ActionsLink></a>
        </Link>
        <ActionsDot/>
        <Link href="/download">
          <a><ActionsLink>Download</ActionsLink></a>
        </Link>
      </div>
    </div>
  )
}
function ActionsLink({ children }) {
  return <span className="underline underline-offset-1 font-medium text-blue-300 hover:text-blue-50 transition-colors cursor-pointer">{children}</span>
}
function ActionsDot() {
  return <span className="w-6 text-center select-none">·</span>
}
function ActionsButton({ children, className, icon }) {
  return (
    <span className={`flex items-center justify-center gap-3 text-neutral-50 py-3 px-6 rounded-full font-medium select-none ${className}`}>
      <span className="w-6 h-6 flex items-center text-2xl"><i className={`re-line re-${icon}`}/></span>
      <span>{children}</span>
    </span>
  )
}

export default function Hero() {
  return (
    <div className="bg-blue-500 overflow-hidden relative pb-54 pt-38">
      <div className={Styles.hero__image}>
        <Image
          src="/images/home/hero.png"
          alt="Hero Image"
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
