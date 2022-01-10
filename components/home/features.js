function FeaturesItem({ item }) {
  return (
    <div className="flex flex-col bg-white rounded-3xl gap-4 p-8">
      <div className="flex items-center text-neutral-500 gap-3">
        <div className="flex text-2xl leading-none"><i className={`re-${item.icon.style} re-${item.icon.name}`}/></div>
        <div className="font-medium text-base">{item.title}</div>
      </div>
      <div className="text-base text-neutral-400">{item.description}</div>
    </div>
  )
}

export default function Features(props) {
  let featuresList = [
    {
      icon: {
        style: "brands",
        name: "bolt"
      },
      title: "Super easy",
      description: "Tired of traditional icon packs? Using Revolicon on the web is as easy as a font!"
    },
    {
      icon: {
        style: "brands",
        name: "stars"
      },
      title: "Pixel-Perfect",
      description: "Our icons are designed on a grid that allows them to be rendered perfectly at any pixel or font size."
    },
    {
      icon: {
        style: "line",
        name: "face-id-success"
      },
      title: "Well organized",
      description: "Everything is organized and categorized so that you can work smoothly across the library."
    },
    {
      icon: {
        style: "solid",
        name: "eye"
      },
      title: "Easy recognizable",
      description: "We asked people and tested them so that our icons could be understood by everyone."
    },
    {
      icon: {
        style: "solid",
        name: "shield-tick"
      },
      title: "Tried and tested",
      description: "We've tested them so your icons and styling work perfectly in all modern browsers."
    },
    {
      icon: {
        style: "brands",
        name: "heart"
      },
      title: "Way more on the way",
      description: "We're not done yet. Our team is working hard on future versions so you can work easier!"
    }
  ]
  return (
    <div className="grid grid-cols-3 gap-6">
      {featuresList.map((item, index) => (
        <FeaturesItem key={index} item={item} />
      ))}
    </div>
  )
}
