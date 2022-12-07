import { useState } from 'react'
import { useBoolean } from '@/hooks'
import { AlertProps } from '@/components/atoms/Alert/types'

const useToast = () => {
  const [contentState, setContent] = useState<AlertProps | null>(null)
  const { boolean: isClicked, onAsyncClose, onOpen } = useBoolean()

  const onShow = () => {
    onOpen()
    if (isClicked) return
    onAsyncClose(200)
  }

  const setToast = (body: AlertProps) => {
    setContent(body)
    onShow()
  }

  return {
    contentState,
    isClicked,
    onShow,
    setToast
  }
}
export default useToast
