import './services.css'
import offer1 from '../../assets/images/energy9.jpg'
import offer2 from '../../assets/images/Energy1.jpg'
import offer3 from '../../assets/images/Energy4.jpg'
import offer4 from '../../assets/images/Energy6.jpg'
import offer5 from '../../assets/images/Energy7.jpg'
import offer6 from '../../assets/images/petroleum.jpg'
import Text from "../../Props/Text/Text"
import OfferBox from '../../Props/OfferBox/OfferBox'
const Services = () => {
  return (
    <div className='services'>
      <Text className="prop-text" greenText= 'Our Services' blackText='What we offer'/>  


    <div className='offer-prop'>
    
      <OfferBox image={offer1} bigText='Energy Production' smallText='This includes providing insights into the quantity and sources of energy produced within Nigeria.' />


      <OfferBox image={offer2}bigText='Energy consumption' smallText='This includes providing insights into the quantity and sources of energy produced within Nigeria.' />

      <OfferBox image={offer3} bigText='Energy Reserves' smallText='This includes providing insights into the quantity and sources of energy produced within Nigeria.' />

      <div className="row-border"></div>

      <OfferBox image={offer4} bigText='Energy Imports and Exports' smallText='Volume and value of energy imports and exports will be presented to assess Nigeria’s dependence on external sources or its role as an energy exporter.' />

      <OfferBox image={offer5} bigText='Energy Prices' smallText='Historical price data for various fuels or electricity tariffs are tracked to understand market dynamics and assess the affordability of different types of energy for consumers.' />

      <OfferBox image={offer6} bigText='Environmental Impact' smallText='This will help in monitoring progress towards environmental goals and identifying areas for improvement.' />


    </div>
       </div>
  )
}

export default Services