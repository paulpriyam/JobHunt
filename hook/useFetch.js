import { useState, useEffect } from "react";
import axios from "axios";



const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      params: { ...query },
      headers: {
        "X-RapidAPI-Key": "126ea26e4emshf3ad9b38c9194d8p11a019jsn4668bcc3b216",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            console.log(response.data.data)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is some error');
        } finally {
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return { data, isLoading, error, refetch };
}


export default useFetch; 