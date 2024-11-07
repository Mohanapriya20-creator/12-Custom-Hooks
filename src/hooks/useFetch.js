import { useEffect, useState } from 'react';

export default  function useFetch(fetchfn,initialData) {
    const [isFetching, setIsFetching] = useState();
    const [fetchedData, setFetchedData] = useState(initialData);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchfn();
                setFetchedData(data);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }

            setIsFetching(false);
        }

        fetchData();
    }, [fetchfn]);

    return { isFetching, fetchedData, error,setFetchedData };
}