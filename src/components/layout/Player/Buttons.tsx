const Buttons = () => {
  return (
    <div className='player__buttons'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        style={{ msFilter: "" }}
        fill="#ffffff"
      >
        <path d="M16 7l-7 5 7 5zm-7 5V7H7v10h2z"></path>
      </svg>
      <button className='player__play'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="#7434DB"
        >
          <path d="M7 6v12l10-6z"></path>
        </svg>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        style={{ msFilter: "" }}
        fill="#ffffff"
      >
        <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path>
      </svg>
    </div>
  )
}

export default Buttons