import {Header} from "../elements/card";
import Browser from "../elements/browser";
import Preview from "../elements/preview";

export default function Brands() {
  return (
    <div className="flex flex-col p-12 pb-0 bg-white rounded-3xl relative">
      <div className="mb-[72px] h-full">
        <Header
          badge="brands"
          category="Brands"
          title="200+ Brand Icons"
          description="Easily add the most popular brand logos to your project or website."
          button={{
            href: {
              pathname: "/icons",
              query: { s: "brands" },
            }
          }}
        />
      </div>
      <div className="relative z-10">
        <Browser className="rounded-t-2xl border-b-0" style={{
          width: "100%",
          height: 268
        }}>
          <Preview type="brands" list={[
            ["apple", "google", "facebook", "amazon"],
            ["spotify", "github", "discord", "paypal"]
          ]}/>
        </Browser>
      </div>
    </div>
  )
}
