import { useMediaQuery } from '@/hooks'

const OpenNavbar = () => {
  const isDesktop = useMediaQuery('(min-width: 52em)')

  if (isDesktop) return null

  return (
    <div>
      <button className='header__open'>
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </button>
    </div>
  )
}

export default OpenNavbar