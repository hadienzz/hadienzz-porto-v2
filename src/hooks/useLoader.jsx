import { useEffect, useState } from "react"


const useLoader = () => {
    const [loading, setLoading] = useState(true)
    const [textShowing, setTextShowing] = useState(false)
    
    useEffect(() => {
        const secondTextTimer = setTimeout(() => {
            return setTextShowing(true)
        }, 1500)

        const loaderTimer = setTimeout(() => {
            return setLoading(false)
        }, 3000)

        return () => {
            clearTimeout(loaderTimer)
            clearTimeout(secondTextTimer)
        }

    }, [])

    return {
        loading,
        textShowing
    }
}
export default useLoader