import { useState } from 'react';
import { useEffect } from 'react';

export default function useAxios(configRequest) {

	const { axiosInstance, method, url, othersConfig = {} } = configRequest;
	const [data, setData] = useState([]);
	const [loading, setIsLoading] = useState(true);
	const [error, setError] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axiosInstance[method](url, {
          ...othersConfig, 
        })
        setData(res.data)
      }
      catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return [ data, loading, error]

}
