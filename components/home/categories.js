import Marquee from "react-fast-marquee";

export default function Categories() {
  return (
    <div className="bg-white p-4">
      {["left", "right"].map((direction, key) => (
        <Marquee
          key={key}
          direction={direction}
          gradientColor={false}
          pauseOnHover={true}
          pauseOnClick={true}
        >
          <div className="flex gap-4 ml-4">
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
            <div>XXX</div>
          </div>
        </Marquee>
      ))}
    </div>
  )
}
