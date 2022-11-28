import './style.css'

const SearchInput = ({
  name,
  value,
  placeholder,
  onChange
}: {
  placeholder?: string
  name: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className='search-input'>
      <SearchIcon />
      <input
        type='text'
        className={'input pl-4'}
        spellCheck={false}
        autoComplete='off'
        placeholder={placeholder || 'Search a song here'}
        name={name}
        {...value && { value }}
        {...onChange && { onChange }}
      />
    </div>
  )
}

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="var(--200)"
  >
    <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
  </svg>
)

export default SearchInput