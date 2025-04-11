import { useCallback, useEffect, useRef, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const controller = useRef(null);

  const handleFetch = async () => {
    if (!url) return;
    if (controller.current) {
      controller.current.abort();
    }
    controller.current = new AbortController();
    setLoading(true);
    try {
      const resp = await fetch(url, { signal: controller.current?.signal });
      const data = await resp.json();

      setData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    handleFetch();
    return () => controller.current?.abort();
  }, [url]);

  return { data, loading, error };
}
