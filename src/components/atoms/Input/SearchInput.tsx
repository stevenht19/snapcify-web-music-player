import { BiSearch } from 'react-icons/bi'
import './style.css'

type Props = {
  placeholder?: string
  name: string
  value?: string
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

const SearchInput: React.FC<Props> = ({
  name,
  value,
  placeholder,
  onChange
}) => {
  return (
    <div className='search-input'>
      <BiSearch size={'1.7rem'} />
      <input
        type='text'
        className={'input pl-4'}
        spellCheck={false}
        autoComplete='off'
        placeholder={placeholder || 'Search a song here'}
        name={name}
        value={value}
        {...onChange && { onChange }}
      />
    </div>
  )
}

export default SearchInput