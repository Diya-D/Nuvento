import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null)
    const [IsPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const abortCont=new AbortController();
        fetch(url,{signal:abortCont.signal})
            .then(res => {
                console.log(res)
                if (!res.ok) {
                    throw Error('could not fetch the data from the resource')
                }
                return res.json();
            }).then(data => {
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if(err.name==="AbortError"){
                    console.log("fetch aborted")
                }
                else{
                setError(err.message)
                setIsPending(false)
                }

            },);
            return()=> abortCont.abort()


    }, [url])
    return { blogs, IsPending, error }
}
export default useFetch;