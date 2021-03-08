import { useEffect, useState } from "react";
import { api } from "../../api";

const useCatVotes = (): any => {

    const [errorMesaage, setErrorMessage] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [cats, setCats] = useState(null)

    const getCatVotes = (): void => {
        setLoading(true)
        api.get.catVotes()
            .then((res) => {
                setLoading(false)
                setCats(res[0])
            })
            .catch(error => {
                setLoading(false)
                setErrorMessage(error.response.data.message)
            });
    }

    useEffect(() => {
        getCatVotes()
    }, [])

    return [loading, errorMesaage, cats]

}

export default useCatVotes;