import './style.css'

const User = ({
  src,
  alt,
  className
}: {
  src: string,
  alt: string,
  className?: string
}) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={`avatar song-avatar${className ? ' ' + className : ''}`}
      />
    </div>
  )
}

export default User