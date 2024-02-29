// useFetchData.ts
import ICar from '@/interfaces/car';
import { useEffect, useState } from 'react';

export function useFetchData(apiEndpoint: string) {
  const [data, setData] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);

        if (response.ok) {
          const result = await response.json();
          setData(result.cars);
        } else {
          setError('Error fetching data');
        }
      } catch (error: any) {
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  return { data, loading, error };
}
