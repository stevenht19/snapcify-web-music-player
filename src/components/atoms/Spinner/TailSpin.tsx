import { TailSpin } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <TailSpin 
      width={30}
      height={30}
      color='var(--primary)'
      ariaLabel='tail-spin-loader'
      visible={true}
    />
  )
}

export default Spinner