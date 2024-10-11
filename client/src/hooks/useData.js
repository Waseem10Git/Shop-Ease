import {useState} from "react";
import productsApi from "../api/productsApi";

const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const request = async (apiFun) => {
        try {
            setLoading(true);
            const result = await apiFun();
            setLoading(false);
            setData(result.data);
        } catch(err) {
            if (err.response && err.response.status >= 400 && err.response.status <500) setError(err.response.data);
            setLoading(false);
        }
    }

    return {data, setData, loading, setLoading, error, setError, request}
}

export default useData;