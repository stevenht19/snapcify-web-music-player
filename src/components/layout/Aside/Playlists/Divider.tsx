const Divider = ({ text }: {
  text: string
}) => {
  return (
    <li className='nav__section'>
      {text.toUpperCase()}
    </li>
  )
}

export default Divider