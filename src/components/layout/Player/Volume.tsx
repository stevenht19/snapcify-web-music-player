const Volume = () => {
  return (
    <div>
      <input 
        type='range' 
        min={1} 
        max={100} 
        value={50} 
      />
    </div>
  )
}

export default Volume