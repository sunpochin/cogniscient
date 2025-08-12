interface OurServicesProps {
  titleTop?: string
  titleLeft?: string
  descriptionTop?: string
  descriptionLeft?: string
}

const OurServices: React.FC<OurServicesProps> = ({
  titleTop = '198.444rem',
  titleLeft = 'calc(50% - 567.5px)',
  descriptionTop = '203rem',
  descriptionLeft = '16.472rem',
}) => {
  return (
    <>
      <div
        className="text-[2rem] font-semibold"
        style={{ top: titleTop, left: titleLeft }}
      >
        Our Services
      </div>
      <div
        className="font-semibold inline-block w-[60.667rem] h-[10.278rem]"
        style={{ top: descriptionTop, left: descriptionLeft }}
      >
        Our unique methodology begins with detailed one-on-one user studies
        (sometimes called &quot;protocol analysis&quot;) and brings in
        statistical and computational modeling. We are recognized leaders in the
        application of computational modeling to UX analysis. We cover the full
        product lifecycle—strategic opportunity mapping, evidence‑based UX
        research, rapid prototyping of intelligent interactions, and rigorous
        human‑in‑the‑loop evaluation.
      </div>
    </>
  )
}

export default OurServices
