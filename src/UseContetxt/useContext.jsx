import React, { useEffect, useState } from 'react';

const useFetchData = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await fetch('/data.json');
                if(!res.ok) throw new Error("Failed to data load");
                const result = await res.json();
                setData(result);
            } catch(err){
            setError(err.message)
        } finally{
            setLoading(false)
        }
        }
        fetchData();
    },[])

    return {data, loading, error}
};

export default useFetchData;