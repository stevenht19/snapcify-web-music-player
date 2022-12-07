import { useBoolean } from '@/hooks'

const useToast = () => {
  const { boolean: isClicked, onAsyncClose, onOpen } = useBoolean()

  const onShow = () => {
    onOpen()
    if (isClicked) return
    onAsyncClose(0)
  }

  return {
    isClicked,
    onShow,
  }
}
export default useToast