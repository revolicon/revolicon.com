import {Header} from "./elements/card";
import Browser from "./elements/browser";
import Preview from "./elements/preview";

export default function Brands() {
  return (
    <div className="flex flex-col p-12 pb-0 bg-white rounded-3xl relative">
      <div className="mb-[72px] h-full">
        <Header
          badge="animations"
          category="Animations"
          title="If you like to move it"
          description="Beat, fade, spin and more. Start adding movement to icons with animations."
          button={{
            href: "/docs/animations",
          }}
        />
      </div>
      <div className="relative z-10">
        <Browser className="rounded-t-2xl border-b-0" style={{
          width: "100%",
          height: 268
        }}>
          <Preview type="line" list={[
            ["shield", "shield", "shield"],
            ["shield", "shield", "shield"]
          ]}/>
        </Browser>
      </div>
    </div>
  )
}
