import Image from 'next/image'

function Text() {
  return (
    <div className="flex text-neutral-50 flex flex-col justify-center items-center">
      <div className="text-[40px] leading-[48px] tracking-title font-semibold text-center flex flex-col justify-center items-center">
        <div>Beautifully <span className="text-blue-300 font-normal">✦</span> Crafted</div>
        <div>Open Source Icons</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div className="h-[640px] bg-blue-500 overflow-hidden relative pb-36 pt-38">
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
      <div className="container relative z-10">
        <Text/>
      </div>
    </div>
  )
}
