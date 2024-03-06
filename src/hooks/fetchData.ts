"use Client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchData(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      axios
      .get(url)
      .then((res) => {
        setLoading(false);
        const data = res.data;
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.log(`Error fetching data of URL: ${url}`, err);
      });
    } catch (error) {
      console.log(`Error fetching data of URL: ${url}`, error);
      
    }
  }, [url]);

  return { data, loading, error };
}
