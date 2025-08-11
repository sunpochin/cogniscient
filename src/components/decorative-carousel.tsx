import Image from 'next/image'

const imageTops = ['0rem', '77.389rem', '154.778rem', '232.167rem']

function DecorativeCarousel() {
  return (
    <>
      {imageTops.map(top => (
        <Image
          key={top}
          className={`absolute top-[${top}] left-[61.667rem] w-[34.333rem] h-[77.389rem] overflow-hidden`}
          width={618}
          height={1393}
          sizes="100vw"
          alt=""
          src="/layer-2.svg"
        />
      ))}
    </>
  )
}

export default DecorativeCarousel
