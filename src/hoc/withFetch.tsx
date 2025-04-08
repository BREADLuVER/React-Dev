import React, { useState, useEffect } from "react";

interface WithFetchProps<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function withFetch<T>(
  WrappedComponent: React.ComponentType<WithFetchProps<T>>,
  url: string
) {
  return function FetchComponent() {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result: T = await response.json();
          setData(result);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [url]);

    return (
      <div className="fetch-wrapper">
        <WrappedComponent data={data} loading={loading} error={error} />
      </div>
    );
  };
}

export default withFetch;
