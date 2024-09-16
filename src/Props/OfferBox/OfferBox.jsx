import './offerBox.css'

const OfferBox = ({image, bigText, smallText}) => {
  return (
    <div className='offer-box'>
      <img src={image} alt="" />
      <h3>{bigText}</h3>
      <p>{smallText}</p>
    </div>
  )
}

export default OfferBox