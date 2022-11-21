import style from './style.module.css'

const Avatar = ({
  src,
  alt,
  type,
  className
}: {
  type: string,
  src: string,
  alt: string,
  className?: string
}) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={`${style.avatar} ${style[type]}${className ? ' ' + className : ''}`}
      />
    </div>
  )
}

export default Avatar