import { useEffect, useState } from "react";
import { api } from "../../api";

const useUpload = (): any => {

  const [errorMesaage, setErrorMesaage] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const clearMessages = (): void => {
    if (loading) {
      setErrorMesaage(null)
      setSuccess(false)
    }
  }
  useEffect(clearMessages, [loading])

  const upload = (file: string): void => {
    setLoading(true)
    api.post.images(file)
      .then(() => {
        setLoading(false)
        setSuccess(true)
      })
      .catch(error => {
        setLoading(false)
        setErrorMesaage(error.response.data.message)
      });
  }

  return [loading, success, errorMesaage, upload]

}

export default useUpload;
