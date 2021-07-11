
const AboutCard = ({item, title, text}) => {
  return (
    <div>
      <h3 className="text-primary text-2xl font-bold">
        <span className="text-secondary mr-2">{item}</span>
        {title}
      </h3>
      <p className="font-normal text-primary text-lg mt-9 leading-[30px]">{text}</p>
    </div>
  )
}

export default AboutCard

