import './about.css'
import aboutImg from '../../assets/images/petroleum.jpg'
import Progress from '../../Props/Progress/Progress'
import Text from '../../Props/Text/Text'

const About = () => {
  return (
    <div className='about'>
      <div className="about-img">
        {/* <div className='img-shape'></div> */}
         <img className='abt-image' src={aboutImg} alt='abot-img' />
      </div>
      <div className="about-us">
        <Text greenText='About us' blackText='What&apos;s Our Resource Story' />
        <p> Energy Data Bank of Nigeria (EDBN) is a website that presents a comprehensive energy data bank serving as repository of information and statistics of energy production, consumption, reserves, and other relevant factors. It is intended to serves as a valuable resource for policymakers, researchers, analysts, investors, and the general public to understand and analyze the energy landscape of Nigeria. </p>
      
      <div className="progress-bars">
      <Progress className="p-bar" progress={'21MI'} title={'Project Done'} />
      <Progress className="p-bar" progress={'30MI'} title={'Workers work'} />
      </div>
      </div>
    </div>
  )
}

export default About