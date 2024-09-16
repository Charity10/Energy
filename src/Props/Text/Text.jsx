import './text.css'

const Text = ({greenText, blackText}) => {
  return (
    <div className='prop-text'>
      <p className='greentext'>{greenText}</p>
      <h1 className='blacktext'>{blackText}</h1>
    </div>
  )
}

export default Text