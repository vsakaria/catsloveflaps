import { useEffect, useState } from "react";
import { api } from "../../api";

const useGetImages = (): any => {

  const [errorMesaage, setErrorMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [cats, setCats] = useState(null)

  const getImages = (): void => {
    setLoading(true)
    api.get.images()
      .then((res) => {
        setLoading(false)
        setCats(res.data)
      })
      .catch(error => {
        setLoading(false)
        setErrorMessage(error.response.data.message)
      });
  }

  useEffect(() => {
    getImages()
  }, [])

  return [loading, errorMesaage, cats, getImages]

}

export default useGetImages;