import { useNavigation, Form } from 'react-router-dom'
import { SearchInput } from '@/components/atoms/Input';
import ProgressBar from '@badrap/bar-of-progress'

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
    <Form method='get' action='/search'>
      <SearchInput name='q' />
    </Form>
  )
}