import { useEffect, useState } from 'react';
import { api } from '../../api/api.js';
import { useNavigate } from 'react-router-dom';

const useGetNearId = (x,y) => {
  const navigate = useNavigate();
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await api.get(`place/nearest?x=${x}&y=${y}`);
      console.log("res", res);
      setResponse(res.data);
    } catch (err) {
      setError(err);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [x,y]);

  return { response, error, loading };
};

export default useGetNearId;
