import styles from "/styles/home/Start.module.scss";
import Link from "next/link";

function StartButton() {
  return (
    <Link href="/">
      <a className="flex items-center gap-3 bg-white rounded-full py-3 px-5 text-blue-900">
        <i className="re-line re-livestream text-2xl leading-none"/>
        <div className="text-base"><span className="font-medium">Get Started</span> - it’s free</div>
      </a>
    </Link>
  );
}
function StartList() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-2xl text-white font-semibold">
        <span className={styles.start__gradient}>Launch</span> in 3 steps
      </div>
      <div className="flex gap-4 w-full">
        <StartListItem
          className="rounded-tl-3xl"
          number="1"
          title="Set up Revolicon"
        >
          <u>Get started with a Kit</u>, or <u>explore the docs</u> for more ways to use.
        </StartListItem>
        <StartListItem
          number="2"
          title="Add Icons"
        >
          Drop icons into your <u>website</u>, <u>apps</u>, <u>design programs</u>, and <u>more</u>.
        </StartListItem>
        <StartListItem
          className="rounded-tr-3xl"
          number="3"
          title="Stylize"
        >
          Easily <u>color</u>, <u>size</u>, <u>rotate</u>, <u>animate</u>, <u>transform</u>, and <u>more</u>.
        </StartListItem>
      </div>
    </div>
  )
}
function StartListItem({ className, children, number, title }) {
  return (
    <div className={`flex flex-col items-center flex-1 p-8 bg-black/[.16] ring-1 ring-inset ring-white/[.08] rounded-xl backdrop-blur-xl ${className}`}>
      <div className="w-14 h-14 bg-white/[.04] ring-1 ring-inset ring-white/[.04] rounded-full flex justify-center items-center mb-6">
        <div className="text-blue-200 text-2xl">{number}</div>
      </div>
      <div className="text-neutral-50 leading-6 text-[18px] font-medium mb-2">{title}</div>
      <div className="w-full text-base leading-normal text-center text-blue-200">{children}</div>
    </div>
  )
}

export default function Start() {
  return (
    <div className={styles.start}>
      <div className="flex flex-col gap-8 items-center max-w-[512px] w-full">
        <div className="text-white text-[40px] leading-[48px] font-semibold text-center">
          <span className={styles.start__gradient}>Supercharge</span> your next Landing Page
        </div>
        <div className="text-base text-center text-white font-light tracking-normal">
          Instantly browse icons from our huge library and use in your next project. A <span className={styles.start__gradient}>revolutionary</span> icon set that will meet all your icon needs. Moreover, everything is completely free and open source.
        </div>
        <StartButton/>
      </div>
      <StartList/>
    </div>
  )
}
