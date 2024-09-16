import heroImage from '../../assets/images/hero-img.png'
import './hero.css'
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar />

      <section className='hero-section'>
        <div className='hero-content'>
          <span className='welcome-badge'>WELCOME</span> <h2>We Provide solar Energy Source</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='buttons'>
            <button className='btn-1'>READ MORE</button>
            <button className='btn-2'>CONTACT US</button>
          </div>
        </div>
        <div className='hero-img'>
          <img src={heroImage} alt='hero-img'/>
    </div>
      </section>
    </div>
  );
};

export default Hero