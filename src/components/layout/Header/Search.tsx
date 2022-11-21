import ProgressBar from '@badrap/bar-of-progress'
import { useNavigation, Form } from 'react-router-dom'

const progress = new ProgressBar({
  size: 2,
  color: 'var(--primary)'
});

export default function Search() {
  const { state } = useNavigation()

  if (state === 'loading') {
    progress.start();
  } else {
    progress.finish()
  }

  return (
    <Form method='get' action='/search' replace>
      <div className='searcher'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#494A55"
        >
          <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
        <input
          aria-label='search songs'
          type='text'
          className='search__input'
          name='q'
          autoComplete='off'
          placeholder='Search a song here'
        />
      </div>
    </Form>
  )
}