import { useEffect, useState } from 'react';

type UseApiDataFunction = (url: string) => {
    isLoading: boolean,
    data: Record<string, string> | null;
}

const useApiData: UseApiDataFunction = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(url, {
            headers: {
                Authorization: 'mysecrettoken'
            }
        });
        
        const result = response.headers.get('content-type') === 'application/json; charset=utf-8' ? await response.json() : { data: await response.text() };
        setData(result);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData()
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, [url]);

    return {
        data,
        isLoading
    }
}

export default useApiData;
