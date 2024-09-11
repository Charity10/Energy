import './progress.css'

const Progress = ({progress, title}) => {
  return (
  
   <div className='progress'>
      <svg width="150" height="150" viewBox="0 0 150 150" className="circular-progress">
      
      <circle className="bg"></circle>
      <circle className="fg"></circle>
      <text x="50%" y="50%" textAnchor="middle" dy=".4em" className="progress-text">
            {progress}
          </text>
    </svg>
    <p>{title}</p>
   </div>
    

  )
}

export default Progress