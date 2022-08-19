import {useState} from 'react';
import {useEffect} from 'react'


const useFetch =(url)=>{
    const [data, setData] = useState(null);
    const[isPending, setPending]=useState(true)
    const[error, setError]=useState(null)


    useEffect(()=>{

        //fetch data from the end point 

        fetch(url)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            setData(data)
            setPending(false)
        }).catch((err)=>{
            setError(err.message)
            setPending(false)
            
        })

    },[url])

    return {data,isPending,error}
}

export default useFetch