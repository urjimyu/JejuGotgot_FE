import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const useGetPlace = (id) => {
  const navigate = useNavigate();
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (id) => {
    if (!id) return; // id가 없으면 데이터 요청하지 않음
    try {
      const res = await api.get(`/place/${id}`);
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
    fetchData(id);
  }, [id]);

  return { response, error, loading, refetch: () => fetchData(id) };
};

export default useGetPlace;
