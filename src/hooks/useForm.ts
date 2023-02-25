import { useState } from 'react'

const useForm = <T>(initialState: T) => {
  const [formValues, setFormValues] = useState<T>(initialState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  return { formValues, onChange }
}

export default useForm