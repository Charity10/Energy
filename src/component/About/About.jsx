import './about.css'
import aboutImg from '../assets/images/petroleum.jpg'
import Progress from '../Progress'
import Text from '../Text'

const About = () => {
  return (
    <div className='about'>
      <div className="about-img">
        {/* <div className='img-shape'></div> */}
         <img className='abt-image' src={aboutImg} alt='about-img' />
      </div>
      <div className="about-us">
        <Text greenText='About us' blackText='What&apos;s Our Resource Story' />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae sunt reiciendis cumque tempore nostrum, beatae architecto dolor minus maiores qui quo error assumenda labore nam! Quod consequuntur voluptatem beatae? </p>
      
      <div className="progress-bars">
      <Progress className="p-bar" progress={'21MI'} title={'Project Done'} />
      <Progress className="p-bar" progress={'30MI'} title={'Workers work'} />
      </div>
      </div>
    </div>
  )
}

export default About